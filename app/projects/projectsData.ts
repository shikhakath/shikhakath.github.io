// app/projects/projectsData.ts
export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  timeline: string;
  featured?: boolean;
  summary: string[];
  highlight?: string;
  tags: string[];
  details?: string[];
  heroImage?: string; // main image
  gallery?: string[]; // extra images
  links?: { label: string; href: string }[];
  documents?: { label: string; href: string }[];
  videos?: {
    title: string;
    src: string; // local /public path or embedded URL
    kind?: "local" | "embed"; // "local" = <video>, "embed" = <iframe>
  }[];
};

export const projects: Project[] = [
    {
    slug: "wearable-ppg-watch",
    title: "⌚ Wearable Heart-Rate Sensor (PPG Watch)",
    timeline: "Fall 2025",
    featured: true, 
    summary: [
      "Designed a wrist-worn device that measures heart rate with PPG and motion with an IMU, then delivers calming haptic feedback when stress signals are detected. Designed the PCB, including power management and sensor interfaces. Helped solder components for bring up.",
      "Core system components included:",
      "• ESP32-S2 microcontroller",
      "• MAXM86161 PPG sensor and BMI270 IMU",
      "• Li-ion battery charging + 3.3 V regulation",
      "• DRV2605L haptic driver with vibration motor"
    ],
    tags: ["KiCad", "ESP32-S2", "PPG", "IMU", "PCB Design", "Power Electronics"],
    details: ["View our project on the HOPE 2025 Project Showcase"],
    links: [ {
      label: "HOPE Fall 2025 Website",
      href: "https://sites.google.com/berkeley.edu/hope-ape-fall-25-final-project/hope/steadybreath-wearable-heart-rate-sensor?authuser=0"
    } ],
  },
      {
    slug: "medium-replacement-robot",
    title: "🤖 Automated Medium-Replacement Robot (Neurotech @ Berkeley)",
    timeline: "Spring 2025",
    summary: [
      "Worked on a robot that automatically replaces cell-culture media. I focused on designing the rocker system to tilt well plates so fluid could be removed cleanly from corners. Our first design used four linear actuators, but it was too tall, loud, and expensive. We redesigned the mechanism using a NEMA-17 stepper with a machinist jack to solve cost and noise constraints."
    ],
    tags: ["Mechanical Design", "Stepper Motors", "Prototyping", "PTC Onshape", "Computer-Aided Design (CAD)"],
    heroImage: "/conference-poster.png", 
  },

    {
    slug: "trinket-pcb-lab",
    title: "🔧 Hands-On PCB Engineering – Trinket Lab",
    timeline: "Fall 2025",
    summary: [
        "Built and debugged embedded systems on an ESP32-S2 board in the Arduino environment. Used an oscilloscope to visualize PWM and I²C signals and understand real-world digital waveforms.",
        "Projects completed included:",
        "• blinking and fading RGB LEDs using PWM",
        "• capacitive touch input with threshold-based LED control",
        "• ambient light sensing with analog readout",
        "• I²C temperature sensing and bus-level signal decoding",
        "• WiFi communication, verified using ping responses"
    ],
    tags: ["ESP32-S2", "Arduino", "Oscilloscope", "PWM", "I²C", "Embedded Systems"],

    heroImage: "/I2C.jpg",

    links: [
        {
        label: "Trinket Lab",
        href: "https://hope.berkie.ee/labs/lab8",
        },
    ],

    gallery: ["/wifi-ping.jpg"],

    videos: [
        {
        title: "PWM LED fading demo",
        src: "/pwm.MOV",
        kind: "local",
        },
        {
        title: "Ambient light sensing demo",
        src: "/light-sensor.MOV",
        kind: "local",
        },
    ],
    },

      {
    slug: "bioe-121-proj",
    title: " 💊 Microfluidic Minimum Inhibitory Concentration Test for Point of Care Assessment of Typhoid Fever",
    subtitle: "",
    timeline: "Fall 2025",
    featured: false,
    highlight:
      "",
    summary: ["Developed a fabrication protocol and device design for a microfluidic point-of-care device that finds the minimum inhibitory concentration (MIC) of antibiotics against Salmonella Typhi directly from a drop of blood. In calculating the exponential growth rate of bacteria and choosing dimensions for our ladder channels, our device achieves a readout time within 9 hours."
    ],
    tags: ["C", "GDB/CGDB", "Git", "Linux"],
    documents: [
      {
        label: "BioE 121 Final Project Report",
        href: "/bioe-121_finalproj.pdf",
      },
    ],
  },

  {
    slug: "snek-game",
    title: "🐍 Snek Game in C",
    subtitle: "",
    timeline: "Fall 2025",
    featured: false,
    highlight:
      "",
    summary: ["Built a fully playable Snake game in C, using a character-based grid to model walls, fruit, and multiple snakes. The game handles movement, growth, and collisions. Snakes die when they hit walls or other snakes, and grow when they eat fruit, which is regenerated elsewhere on the board.",
    "I implemented dynamically sized game boards with manual memory allocation, resizing, and freeing, along with support for saving and reloading game states from files. I also wrote custom unit tests to catch edge cases, debugged segmentation faults using CGDB, and verified memory safety with Valgrind."
    ],
    tags: ["C", "GDB/CGDB", "Git", "Linux"],
  },
  {
    slug: "risc-v-digit-classifier",
    title: "2️⃣ RISC-V Handwritten Digit Classifier",
    timeline: "Fall 2025",
    summary:
      ["Built a handwritten digit classifier in RISC-V assembly, implementing matrix multiplication, ReLU, and argmax directly at the instruction level. The project emphasized calling convention discipline, register management, stack and heap usage, and low-level file I/O.",
      "Debugging focused on tracking register clobbering, memory access errors, and control-flow bugs, strengthening my understanding of how high-level ML operations, like matrix multiplication, map to hardware."],
    tags: ["RISC-V Assembly", "Logism", "Machine Learning (ML)"],
  },
  {
    slug: "61c-cpu",
    title: "💻 CS61CPU",
    timeline: "Fall 2025",
    summary:
      ["Built a 32-bit RISC-V CPU in Logisim, implementing the ALU, register file, immediate generator, datapath, and control logic across the IF, ID, EX, MEM, and WB stages.",
        "The CPU supports R-, I-, S-, B-, U-, and J-type instructions, including arithmetic, memory access, branches, jumps, and multiplication. I implemented a two-stage pipeline and handled control hazards by flushing incorrect instructions on taken branches and jumps, focusing on precise instruction flow and hardware-level correctness."], 
    tags: ["RISV-V Assembly", "Logism"],
  },
  {
    slug: "2048",
    title: "🧮 2048 Game",
    timeline: "Fall 2024",
    summary:
      ["Implemented the core game logic for 2048 in Java, including tile movement, merging behavior, score updates, and game-over detection. Wrote clear helper functions to manage tile motion and merges, ensuring correct behavior across all four tilt directions while preventing double merges."], 
    tags: ["Java", "IntelliJ"],
  },
  {
    slug: "ngrams",
    title: "🈲 NGrams",
    timeline: "Fall 2024",
    summary:
      ["Built a tool that lets users explore how words are used and how their meanings relate over time. Given one or more words, the program can show how often those words appeared in English books across different years, and list related words based on their meanings. Behind the scenes, I wrote the Java code that reads large text datasets, organizes the data efficiently, and responds to user queries. A weighted directed graph data structure was used to model relationships between words. "], 
    tags: ["Java", "IntelliJ"],
  },
  {
    slug: "build-your-own-world",
    title: "🌎 Build Your Own World",
    timeline: "Fall 2024",
    summary:
      ["Built a tool that lets users explore how words are used and how their meanings relate over time. Given one or more words, the program can show how often those words appeared in English books across different years, and list related words based on their meanings. Behind the scenes, I wrote the Java code that reads large text datasets, organizes the data efficiently, and responds to user queries. A weighted directed graph data structure was used to model relationships between words. "], 
    tags: ["Java", "IntelliJ"],
  },

    {
    slug: "connectomics-project",
    title: "🧠 Connectomics Project (Neurotech @ Berkeley)",
    timeline: "Fall 2025",
    summary: [
      "Built computational models to study how Drosophila sensory neurons generate spikes and drive movement in biomechanical simulations. I implemented parts of the Hodgkin–Huxley model and wrote data-processing pipelines for large neural simulations, focusing on stability and performance."
    ],
    tags: ["Python", "TensorFlow", "Brian2", "NeuroMechFly", "FlyVis"],
  },

    {
    slug: "carevoice-hackathon",
    title: "🩺 CareVoice - UC Berkeley AI Hackathon Project",
    timeline: "Summer 2024",
    summary: [
      "Prototyped and coded an app to help non-English-speaking patients communicate symptoms. I developed the iOS frontend and integrated various multimodal API's such as Groq, Llama, ElevenLabsAPI, and DeepL to simplify interactions between non-english speaking patients and their healthcare providers.", 
      "The system recognizes speech, emotion, and context to better interpret how patients describe symptoms.",
    ],
    tags: ["Swift", "iOS", "FastAPI", "Groq", "ElevenLabs API", "Figma", "DeepL", "Llama"],

    links: [
        {
        label: "Github Repo",
        href: "https://github.com/shikhakath/ucbhackathon24",
        },
        {
        label: "Devpost",
        href: "https://devpost.com/software/care-voice",
        },
    ],
  },
  
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
