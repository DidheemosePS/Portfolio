import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  authorName: string;
  message: string;
}

export const ContactFormEmail = ({
  authorName,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head>
        <title>A message from your portfolio</title>
      </Head>
      {/* <Preview>Read {authorName}'s message</Preview> */}
      <Tailwind>
        <Body>
          <Section>
            <Container>
              <Section>
                <Row>
                  <Text className="text-3xl font-semibold text-gray-700">
                    Here's what {authorName} wrote
                  </Text>
                  <Text className="text-base leading-5 text-gray-700 bg-gray-200 p-6 rounded-md mt-4">
                    "{message}"
                  </Text>
                </Row>
              </Section>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
