// src/components/InfoSection.js
import styled from "styled-components";

const Section = styled.div`
  margin: 20px 0;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const InfoSection = ({ title, description }) => {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </Section>
  );
};

export default InfoSection;
