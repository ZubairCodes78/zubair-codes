import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function Privacy() {
  return (
    <main className="flex-1">
      <Section className="min-h-screen pt-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-8">
              Privacy Policy
            </h1>
            <p className="text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, and business information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to communicate with you about our services, provide the products and services you request, and improve our offerings. We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">3. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">4. Your Rights</h2>
                <p className="mb-4">
                  You have the right to access, correct, or delete your personal information. Contact us at hello@zubair.codes to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">5. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at hello@zubair.codes.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
