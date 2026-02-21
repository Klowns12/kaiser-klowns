const fs = require('fs');
const path = require('path');
const dirs = ['ja.ts', 'zh.ts', 'ko.ts', 'fr.ts', 'de.ts', 'es.ts'];

const arkaiEng = `        arkaiNews: {
            title: 'Introducing "Arkai Work Assistant": A LINE-based AI Assistant',
            subtitle: 'March 2026',
            paragraphs: [
                'Amidst workflows heavily reliant on LINE as a central communication hub, many teams continue to face issues with expired files, lost information, miscommunication, and confusion over task responsibilities. Recently, the "Arkai Work Assistant" was developed—an intelligent LINE assistant specifically designed to solve these problems.',
                'One of the main pain points of working via LINE is the limitation on file storage and retrieving past data. Arkai Work Assistant allows users to save files from chats permanently to the cloud, search for past files by name or date, summarize daily discussions, and automatically extract key takeaways or meeting resolutions.',
                'Users can simply type commands like "summarize today\\'s chat" or "find yesterday\\'s file" for immediate execution.',
                'Beyond file storage, Arkai Work Assistant can create tasks from conversations, assign responsibilities, and set deadlines directly within a LINE group—reducing confusion about "who does what" and preventing missed deadlines. The system also features a Memory function that remembers the important context of each group, allowing users to ask retroactively, "What did we agree on regarding this?" or "Who is responsible for this task?"',
                'Arkai Work Assistant is built to support individual users, SME teams, and large enterprises, offering package tiers that determine cloud storage space, data retention periods, and AI usage limits. Under the hood, the system utilizes a modular backend architecture, enabling future scalability—whether integrating with websites, applications, or other enterprise systems under the Arkai AI Core.',
                'The launch of Arkai Work Assistant reflects a new paradigm for the digital workplace: transforming LINE from merely a communication tool into a fully-fledged Workspace with built-in task and knowledge management.',
                'By integrating AI with familiar work behaviors, Arkai Work Assistant promises an essential step toward reducing the chaos of chat-based work and elevating team efficiency across organizations of any size.'
            ],
            backLabel: 'Back to News',
        },
        arkaiPromo: {
            title: 'Campaign: Arkai Work Assistant Early Access Program',
            subtitle: 'Limited Time Offer',
            paragraphs: [
                'Join the Early Access Program for Arkai Work Assistant. Transform your LINE groups into powerful workspaces with our AI-driven solution.',
                'Receive 3 months of free full access to our AI assistant on LINE, including 50GB cloud file storage and unlimited chat summaries and task creation. This offer is strictly limited to the first 100 organizations that register.',
                'Benefits include: 3 Months Free Full Access, 50GB Cloud File Storage, Unlimited Chat Summaries & Task Creation, and Free Setup & Onboarding Support.'
            ],
            backLabel: 'Back to News',
        },
    },
};
`;

for (const file of dirs) {
    const filePath = path.join('app/i18n/dictionaries', file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Account for CRLF and any trailing spaces
    content = content.replace(/ {4}\},[\r\n]+\};[\r\n\s]*$/, arkaiEng);
    fs.writeFileSync(filePath, content);
    console.log('Fixed ' + file);
}
