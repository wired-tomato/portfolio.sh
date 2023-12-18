import * as bin from './bin';

export const handleTabCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const commands = Object.keys(bin)
    .concat('clear', './portfolio.sh')
    .filter((entry) => entry.startsWith(command));

  if (commands.length === 1) {
    setCommand(commands[0]);
  }
};
