CREATE TABLE public.contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 120),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
  request_type TEXT NOT NULL CHECK (request_type IN ('Serwis PC', 'Budowa i konfiguracja sieci', 'Inna sprawa')),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_requests TO anon, authenticated;
GRANT ALL ON public.contact_requests TO service_role;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Każdy może wysłać zgłoszenie"
ON public.contact_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);