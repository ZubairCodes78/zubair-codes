import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function Terms() {
  return (
    <main className="flex-1">
      <Section className="min-h-screen pt-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading mb-8">
              Terms of Service
            </h1>
            <p className="text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing or using Zubair Codes services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">2. Services</h2>
                <p className="mb-4">
                  Zubair Codes provides AI automation, web development, AI content, and marketing services. Specific deliverables, timelines, and pricing will be outlined in individual project agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">3. Payment Terms</h2>
                <p className="mb-4">
                  Payment schedules vary by project. Typically, a 50% deposit is required to begin work, with the remaining 50% due upon completion. All payments are non-refundable unless otherwise specified in a project agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                  Upon full payment, clients receive full ownership of custom code and deliverables created for their project. Zubair Codes retains the right to use general code libraries and frameworks developed for multiple clients.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">5. Client Responsibilities</h2>
                <p className="mb-4">
                  Clients agree to provide necessary materials, feedback, and access to accounts in a timely manner. Delays in client response may extend project timelines.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">6. Limitation of Liability</h2>
                <p className="mb-4">
                  Zubair Codes shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">7. Termination</h2>
                <p className="mb-4">
                  Either party may terminate the agreement with written notice. Clients will be charged for work completed up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white font-heading mb-4">8. Contact</h2>
                <p className="mb-4">
                  For questions about these Terms of Service, contact us at hello@zubair.codes.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
