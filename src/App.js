
import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Paper,
  Chip,
  Link,
  Divider,
  Zoom,
} from "@mui/material";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import CertIcon from "@mui/icons-material/EmojiEvents";

import { motion } from "framer-motion";



const ProfileAvatar = styled(motion(Avatar))(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
  marginBottom: theme.spacing(2),
  border: `5px solid ${theme.palette.primary.main}`,
  boxShadow: "0 0 15px rgba(25, 118, 210, 0.7)",
}));

const Section = styled(motion(Paper))(({ theme }) => ({
  marginTop: theme.spacing(5),
  padding: theme.spacing(4),
  borderRadius: 20,
  boxShadow: "0 12px 30px rgba(0,0,0,0.16)",
  background:
    "linear-gradient(135deg, rgba(25,118,210,0.05), rgba(245,0,87,0.05))",
  transition: "box-shadow 0.5s ease",
  "&:hover": {
    boxShadow: "0 18px 48px rgba(25,118,210,0.35), 0 8px 20px rgba(245,0,87,0.25)",
  },
}));

const AnimatedChip = styled(motion(Chip))(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(1.2),
  fontWeight: 600,
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  borderRadius: 8,
  cursor: "pointer",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  transition: "background-color 0.4s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
}));

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const chipHover = {
  scale: 1.25,
  boxShadow: "0 8px 20px rgba(245,0,87,0.6)",
  transition: { type: "spring", stiffness: 300 },
};

const profileAvatarAnim = {
  initial: { opacity: 0, scale: 0.85, rotate: -10 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, type: "spring", stiffness: 120 },
  },
};

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: 6, bgcolor: "#f9f9fb", minHeight: "100vh" }}>
     
      <Box
        component={motion.div}
        initial="initial"
        animate="animate"
        variants={profileAvatarAnim}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 6, textAlign: "center" }}
      >
        <ProfileAvatar
          alt="Lokesh Kadireppa Gari"
          src="c:\Users\My Pc\Downloads\Lokesh_Passportsize-min.jpg"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ letterSpacing: 1, mb: 1, color: "#1976d2" }}
        >
          Lokesh Kadireppa Gari
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Aspiring Java Full Stack Developer
        </Typography>
        <Box mt={2} display="flex" justifyContent="center" gap={3}>
          <Link
            href="mailto:kadirappagarilokesh@gmail.com"
            aria-label="Email"
            sx={{ color: "#1976d2", "&:hover": { color: "#f50057" } }}
            target="_blank"
          >
            <EmailIcon fontSize="large" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lokeshkadireppagari/"
            aria-label="LinkedIn"
            sx={{ color: "#1976d2", "&:hover": { color: "#f50057" } }}
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link
            href="tel:+916301535474"
            aria-label="Phone"
            sx={{ color: "#1976d2", "&:hover": { color: "#f50057" } }}
            target="_blank"
          >
            <PhoneAndroidIcon fontSize="large" />
          </Link>
        </Box>
      </Box>

 
      <Section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        elevation={8}
      >
        <Typography
          variant="h5"
          gutterBottom
          fontWeight="medium"
          display="flex"
          alignItems="center"
          sx={{ color: "#1976d2" }}
        >
          <SchoolIcon sx={{ mr: 1 }} />
          Education
        </Typography>
        <Divider sx={{ mb: 3, borderColor: "#1976d2" }} />
        <Box ml={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            Koneru Lakshmaiah Education Foundation - B.Tech, Computer Science Engineering
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Sep 2020 - May 2024 (GPA: 8.70)
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" mt={2}>
            Narayana Junior College - Higher Secondary School Certificate
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Jun 2018 - Jun 2020 (GPA: 8.73)
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" mt={2}>
            Greatway International School - Secondary School Certificate
          </Typography>
          <Typography color="text.secondary">Jun 2017 - Apr 2018 (GPA: 9.50)</Typography>
        </Box>
      </Section>

      <Section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.15 }}
        elevation={8}
      >
        <Typography
          variant="h5"
          gutterBottom
          fontWeight="medium"
          display="flex"
          alignItems="center"
          sx={{ color: "#1976d2" }}
        >
          <WorkIcon sx={{ mr: 1 }} />
          Work Experience
        </Typography>
        <Divider sx={{ mb: 3, borderColor: "#1976d2" }} />
        <Box ml={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            Java Full Stack Developer Intern - Zidio Development, Bengaluru
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Jan 2025 - May 2025
          </Typography>
          <Typography>
            Developed an Enterprise Expense Management System automating expense
            tracking, management, and approval workflows using Java, Spring Boot,
            React.js, and MySQL. Reduced manual errors and provided real-time
            insights for better financial decision-making.
          </Typography>
        </Box>
      </Section>

      <Section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3 }}
        elevation={8}
      >
        <Typography
          variant="h5"
          gutterBottom
          fontWeight="medium"
          display="flex"
          alignItems="center"
          sx={{ color: "#1976d2" }}
        >
          <CodeIcon sx={{ mr: 1 }} />
          Projects
        </Typography>
        <Divider sx={{ mb: 3, borderColor: "#1976d2" }} />
        <Box ml={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            Hospital Management System
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Jun 2024 - Oct 2024
          </Typography>
          <Typography mb={3}>
            Streamlined healthcare operations including patient registration, appointment booking,
            doctor management, and billing. Front-end with React.js, Bootstrap; Back-end with Java,
            Spring Boot; MySQL database.
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" mt={1}>
            Enterprise Expense Management System
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Jan 2025 - May 2025
          </Typography>
          <Typography>
            Automated expense recording, categorization, reporting, and approval workflows for enterprises
            using React.js, Material UI, Java Spring Boot, and MySQL.
          </Typography>
        </Box>
      </Section>

    
      <Section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.45 }}
        elevation={8}
      >
        <Typography
          variant="h5"
          gutterBottom
          fontWeight="medium"
          display="flex"
          alignItems="center"
          sx={{ color: "#1976d2" }}
        >
          <CertIcon sx={{ mr: 1 }} />
          Certifications
        </Typography>
        <Divider sx={{ mb: 3, borderColor: "#1976d2" }} />
        <Box ml={1}>
          <Typography>Azure Fundamentals - Microsoft, Mar 2023</Typography>
          <Typography>Java Full Stack Course Certification - ProStack Academy, Dec 2024</Typography>
        </Box>
      </Section>

      <Section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.6 }}
        elevation={8}
      >
        <Typography variant="h5" gutterBottom fontWeight="medium" sx={{ color: "#1976d2" }}>
          Skills
        </Typography>
        <Divider sx={{ mb: 3, borderColor: "#1976d2" }} />
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
          {[
            "Java", "Spring Boot", "MySQL", "JavaScript", "React.js",
            "HTML", "CSS", "Bootstrap", "Material UI", "Git", "JDBC",
            "JSP", "RESTful APIs", "AWS Basics",
          ].map((skill) => (
            <AnimatedChip
              key={skill}
              label={skill}
              color="primary"
              whileHover={chipHover}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </Box>
      </Section>

      <Section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.75 }}
        elevation={8}
      >
        <Typography variant="h5" gutterBottom fontWeight="medium" sx={{ color: "#1976d2" }}>
          Soft Skills
        </Typography>
        <Divider sx={{ mb: 3, borderColor: "#1976d2" }} />
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
          {[
            "Problem Solving", "Critical Thinking", "Time Management",
            "Teamwork", "Adaptability",
          ].map((skill) => (
            <AnimatedChip
              key={skill}
              label={skill}
              color="secondary"
              whileHover={chipHover}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </Box>
      </Section>
    </Container>
  );
}
