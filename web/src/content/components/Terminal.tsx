import { useRef, useState } from "react";
import { executeCommand } from "./terminalcommand";
import "./terminal.css";

const PRE_TEXT = `Initializing secure connection...
Connection established.
Welcome to Niharika's terminal.

Click here and type "help" to see available commands.
`;

export default function Terminal() {
    const [output, setOutput] = useState(PRE_TEXT);
    const [command, setCommand] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const activateTerminal = () => {
        inputRef.current?.focus();
    };

    const handleCommand = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key !== "Enter") return;

        const input = command.trim();

        if (!input) return;

        const result = executeCommand(input);

        if (result?.type === "clear") {
            setOutput(PRE_TEXT);
        } else {
            setOutput((prev) => {
                return `${prev}

$ ${input}
${result.output}`;
            });
        }

        setCommand("");

        setTimeout(() => {
            inputRef.current?.focus();

            terminalRef.current?.scrollTo({
                top: terminalRef.current.scrollHeight,
                behavior: "smooth",
            });
        }, 0);
    };

    return (
        <div
            className="terminal-window"
            onClick={activateTerminal}
        >
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-button close"></span>
                    <span className="terminal-button minimize"></span>
                    <span className="terminal-button maximize"></span>
                </div>

                <span className="terminal-title">
                    Jarvisss: ~
                </span>
            </div>

            <div
                className="terminal-body"
                ref={terminalRef}
            >
                <pre className="terminal-output">
                    {output}
                </pre>

                <div className="terminal-input-line">
                    <span className="terminal-prompt">$</span>

                    <input
                        ref={inputRef}
                        type="text"
                        value={command}
                        onChange={(e) => setCommand(e.target.value)}
                        onKeyDown={handleCommand}
                        spellCheck={false}
                        autoComplete="off"
                        autoCapitalize="off"
                    />

                    <span className="terminal-cursor"></span>
                </div>
            </div>
        </div>
    );
}