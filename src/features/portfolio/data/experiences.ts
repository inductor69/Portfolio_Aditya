import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "kryptos",
    companyName: "Kryptos",
    companyLogo: "./img/kryptos-logo.png",
    companyWebsite: "https://kryptos.io",
    positions: [
      {
        id: "0C741FC7-A4C2-4B1D-857B-F3058CE8D9CE",
        title: "Software Engineer",
        employmentPeriod: {
          start: "01.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Integrated multiple crypto exchange APIs (REST/WebSocket) with idempotent, normalized data pipelines to ensure accurate trade and ledger ingestion for reconciliation and tax reporting.\n- Built cross-exchange PnL and cost-basis (FIFO/LIFO) computation systems and performed backend optimizations (query tuning, indexing, async processing) to improve throughput, latency, and reliability.",
        skills: [
          "Node.js",
          "TypeScript",
          "Python",
          "PostgreSQL",
          "Redis",
          "Docker",
          "CI/CD",
          "Research",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "auro-digital",
    companyName: "Auro Digital",
    companyLogo: "./img/auro_digital_logo.jpeg",
    companyWebsite: "https://aurodigital.ai",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Software Engineer",
        employmentPeriod: {
          start: "05.2023",
          end: "01.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Architected and maintained low-latency OMS/PMS platforms with real-time market data ingestion, execution workflows, and multi-venue portfolio tracking.\n- Developed high-performance C++ modules and integrated them with backend services to support high-frequency trading and execution-critical paths.\n- Engineered scalable AWS infrastructure (EC2, RDS, S3, Lambda, CloudFront) with CI/CD pipelines enabling zero-downtime deployments and automated rollbacks.\n- Built performance benchmarking and network diagnostics tooling (Golang, Bash, tcpdump) to analyze latency, packet loss, and system bottlenecks in distributed environments.",
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Node.js",
          "Go",
          "C++",
          "WebSockets",
          "gRPC",
          "Redis",
          "NATS",
          "PostgreSQL",
          "Docker",
          "AWS",
          "CI/CD",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "seoul-national-university",
    companyName: "Seoul National University",
    companyLogo: "./img/snu-logo.png",
    companyWebsite: "https://snus.ac.kr",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Research Assistant",
        employmentPeriod: {
          start: "05.2021",
          end: "07.2021",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Conducted performance modeling research on integrated CPU-GPU architectures under Prof. Bernhard Egger (SNU), focusing on OpenCL data-parallel execution and memory hierarchies.\n- Generated and analyzed ISA-level assembly by extracting and disassembling OpenCL kernels to study register allocation and execution behavior on Intel integrated graphics.\n- Designed custom OpenCL microkernels to benchmark compute and memory performance across heterogeneous architectures.\n- Performed low-level profiling and documented architectural insights to evaluate execution efficiency on integrated CPU-GPU systems.",
        skills: [
          "TypeScript",
          "Next.js",
          "React Native",
          "MobX",
          "MobX-State-Tree",
          "Tailwind CSS",
          "Dify",
          "Zalo Mini App",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
      },
    ],
  },
  {
    id: "trinity-college-dublin",
    companyName: "Trinity College Dublin",
    companyLogo: "./img/tcd-logo.png",
    positions: [
      {
        id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
        title: "Research Assistant",
        employmentPeriod: {
          start: "03.2021",
          end: "05.2021",
        },
        employmentType: "Full-time",
        description:
          "- Conducted advanced macroeconomic data analysis under Prof. Ronan Lyons (Trinity College Dublin) to estimate historical trade flows between Britain and Ireland during their economic union.\n- Digitized and processed archival coastal shipping records, transforming unstructured historical documents into structured analytical datasets.\n- Implemented OCR pipelines using Tesseract 4 with LSTM-based models, achieving ~99% accuracy in numeric data extraction from scanned records.\n- Built data validation and aggregation workflows to ensure statistical consistency and reliability of derived economic indicators.",
        icon: "code",
        skills: [
          "Python",
          "C++",
          "Data Analysis",
          "Performance Profiling",
          "OCR (Tesseract)",
          "Bash",
        ],
      },
    ],
  },
]
