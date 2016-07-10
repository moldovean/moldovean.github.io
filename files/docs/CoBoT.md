### CoBoT

The National Anti-Corruption Center is overloaded with more than 10k requests a year. Many of them are not even related to the activity of the NACC or have a trivial solution. To meet the legal requirements, the 300 highly specialized employees of NACC in fighting corruption have to give answers to trivial questions.


We have built a bot, based on Machine Learning, that learns and trains itself and is able to tackle real issues of reported corruption and answer citizen’s questions.


Our AI geeks consist of:
Back-End developers: Stefan -an expert in frameworks and team leader, Corneliu - he’s the quickest hacker I know.
The amazing Front-End Developers that make the UI & UX: Iulian and Cristian.
and I am Adrian: I do algorithms, and Math.


Current State of the Program:
User story: The user can write their issue and CoBoT will determine if their sotry is related to a corruption case, a crime different than corruption, or not a crime at all.
As a bonus: #CoBoT can also suggest the most likely Article from the Penal Code of the RM that suits the story of the user. (Implemented: Art 324: Passive Corruption, Art 325: Active Corruption, Other Crime, Not a Crime).
User story: If the user wishes to report the crime, #CoBoT will guide the user with the necessary steps (info) GIVEN the most likely tags it has detected (Government, Law Enforcement, Education)
Admin story: The officers of NACC can check the status of an issue and #CoBoT can provide status reports.  
The bot trains itself and learns from experience.
Under the hood we uses a modified version of the Naive Bayesian algorithm tailored to perfom decently under limited training data. You can see how it performs live


Improvements:
Feed the training data with real examples fom NACC and see it perform.
Implement user’s location detection (including stealth methods suggested by Mr. Pruteanu)
