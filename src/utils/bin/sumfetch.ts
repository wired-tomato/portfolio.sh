import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'wired.tomato') {
    return `                                                  
                                            
                                            
                 *##/(#%#%%##(               sumfetch: summary display
              (*,##%##*../%%%%%%##          -----------
           (##/#%%(/#(###%%%%%%%%%##         ABOUT
         %(*,(%##(#(#((##%%%%%%%%%%##*       ${config.name}
        ###(###(###%#*/%%%#%%%%%%%%###      ${config.ps1_hostname}
       #%#%##%(***,/#%#(/**/(#%%%%%###(      <u><a href="${config.resume_url}" target="_blank">resume</a></u>
       ####%%%%%%%%%%##/,,,*(#%%%%###((     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
       ####%%%%%%%%%%%%#####%%%%####((      -----------
        ###%%%%%%%%%%%%%%%%%%%%%####(        CONTACT
         %%%%%%%%%%%%%%%%%%%%%%%###(         <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
           %%%%%%%%%%%%%%%%%%%%%##           <u><a href="https://discord.gg/${config.social.discord_server}" target="_blank">discord@${config.social.discord_handle}</a></u>
             %%%%%%%%%%%%%%%%%%              <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
                                            
                                            
`;
  } else {
    return ` `;
  }
};

export default sumfetch;
