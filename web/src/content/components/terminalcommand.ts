export type CommandResult =
    | {
          type: "output";
          output: string;
      }
    | {
          type: "clear";
          output: "";
      };

const socialLinks = {
    github: "https://github.com/TechWhizArt",
    linkedin: "https://www.linkedin.com/in/yourusername/",
    instagram: "https://www.instagram.com/niharikanikaa/",
    email: "mailto:niharika.mailme123@gmail.com",
};

function openSocial(platform: keyof typeof socialLinks): string {
    const url = socialLinks[platform];

    window.open(url, "_blank", "noopener,noreferrer");

    return `Opening ${platform}...`;
}

const commands: Record<string, () => CommandResult | string> = {
    help: () => `
Available commands:

  help        Show available commands
  about       About me
  socials     Display all social links
  github      Open GitHub
  linkedin    Open LinkedIn
  instagram   Open Instagram
  email       Send an email
  clear       Clear terminal
`,

    about: () => `
    Hi! I'm Niharika.

    B.Tech CSE student interested in software development,
    AI/ML, creative technology, and digital projects.
    `,
    whoami:()=>`Hi! I'm Niharika.

    B.Tech CSE student interested in software development,
    AI/ML, creative technology, and digital projects.`,

    socials: () => `
Socials:

  GitHub      → ${socialLinks.github}
  LinkedIn    → ${socialLinks.linkedin}
  Instagram   → ${socialLinks.instagram}
  Email       → ${socialLinks.email}
`,

    github: () => openSocial("github"),

    linkedin: () => openSocial("linkedin"),

    instagram: () => openSocial("instagram"),

    email: () => openSocial("email"),

    iloveyou: () => `I Love You More baby`,
    priyanshu: () => `My Love`,
    niharika:() => `Yup! Thats me >v<`,
    nigga:() => `Bohot Marugi`,
    niga:() => `Badk Spelling to shi likhle`,
    nika:()=> `Kaizoku Oni Orewa Naru`,
    shivam:() => `Moti Chuchi`,
    lavi:()=>`Lavi nhi Lavdi`,
    chirag:()=>`Pagal khi ka hattt bohot pitegaaaa`,
    riya:()=>`Chota don`,
    pragati:()=>`Bda don`,
    rohan:()=>`Jldi shi hoja pagal`,
    kittu:()=>`Selfie maine leli aaj`,
    drishti:()=>`Selfie maine leli aaj`,
    ishu:()=>`Paise wali didi`,
    prachi:()=>`Paise wali didi`,


    clear: () => ({
        type: "clear",
        output: "",
    }),
    clr: () => ({
        type: "clear",
        output: "",
    }),
};

export function executeCommand(input: string): CommandResult {
    const command = input.trim().toLowerCase();

    if (!command) {
        return {
            type: "output",
            output: "",
        };
    }

    const commandFunction = commands[command];

    if (!commandFunction) {
        return {
            type: "output",
            output: `Command not found: ${command}

Type "help" to see available commands.`,
        };
    }

    const result = commandFunction();

    if (typeof result === "string") {
        return {
            type: "output",
            output: result,
        };
    }

    return result;
}