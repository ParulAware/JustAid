const quizData = {
    child_marriage: {
    easy: [
      { scenario: "At what age is marriage legally prohibited for girls?", options: ["Below 18 years", "Below 21 years"], correct: "Below 18 years" },
      { scenario: "Which act regulates child marriage in India?", options: ["Prohibition of Child Marriage Act, 2006", "Domestic Violence Act, 2005"], correct: "Prohibition of Child Marriage Act, 2006" },
      { scenario: "Who can file a complaint under the Prohibition of Child Marriage Act?", options: ["Parents", "Police", "Any citizen"], correct: "Any citizen" },
      { scenario: "What is the punishment for child marriage in India?", options: ["Up to 2 years imprisonment", "Up to 5 years imprisonment", "No punishment"], correct: "Up to 2 years imprisonment" },
      { scenario: "Which section of the Prohibition of Child Marriage Act allows for the annulment of child marriage?", options: ["Section 3", "Section 12", "Section 10"], correct: "Section 12" },
      { scenario: "Who is responsible for reporting child marriages?", options: ["Parents", "Police", "Any citizen"], correct: "Any citizen" },
      { scenario: "Can a minor girl seek the annulment of a child marriage?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which age of the boy is considered to be the legal minimum age for marriage under Indian law?", options: ["18 years", "21 years", "25 years"], correct: "21 years" },
      { scenario: "Can a marriage be annulled if one of the parties is underage?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is child marriage common in rural India?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Who is penalized for arranging a child marriage?", options: ["Parents", "Priest or solemnizer", "Both"], correct: "Both" },
      { scenario: "What is the punishment for promoting child marriage?", options: ["Fine of ₹1 Lakh", "Imprisonment up to 2 years", "Both"], correct: "Both" },
      { scenario: "What is the age for marriage under the Prohibition of Child Marriage Act, 2006 for boys?", options: ["Below 18 years", "Below 21 years", "Below 25 years"], correct: "Below 21 years" },
      { scenario: "Which court can declare a child marriage void?", options: ["Family Court", "District Court", "Supreme Court"], correct: "Family Court" },
      { scenario: "What is the minimum age for marriage for a girl under Indian law?", options: ["16 years", "18 years", "21 years"], correct: "18 years" },
      { scenario: "Which ministry is responsible for enforcing the Prohibition of Child Marriage Act?", options: ["Ministry of Women and Child Development", "Ministry of Home Affairs", "Ministry of Education"], correct: "Ministry of Women and Child Development" },
      { scenario: "What is the penalty for parents who force their daughter into child marriage?", options: ["2 years imprisonment", "5 years imprisonment", "1 year imprisonment"], correct: "2 years imprisonment" },
      { scenario: "Which is an example of a violation of the Prohibition of Child Marriage Act?", options: ["A 16-year-old girl gets married", "A 19-year-old girl marries an 18-year-old boy", "Both"], correct: "A 16-year-old girl gets married" }
    ],
    hard: [
      { scenario: "Which section allows child marriage to be declared void?", options: ["Section 12", "Section 9"], correct: "Section 12" },
      { scenario: "Which international convention addresses child marriage?", options: ["CEDAW", "CRC", "UDHR"], correct: "CEDAW" },
      { scenario: "What is the penalty for forcing a minor into marriage?", options: ["Fine of ₹5 Lakh", "Imprisonment up to 10 years", "Both"], correct: "Imprisonment up to 10 years" },
      { scenario: "What is the minimum age for marriage under the Juvenile Justice Act?", options: ["18 years", "21 years", "20 years"], correct: "18 years" },
      { scenario: "Which of the following laws applies in cases where a child marriage occurs?", options: ["Protection of Children from Sexual Offenses Act", "Juvenile Justice Act", "Both"], correct: "Both" },
      { scenario: "What is the role of the National Commission for Protection of Child Rights (NCPCR) in child marriage cases?", options: ["Monitoring and preventing child marriages", "Providing legal aid to victims", "Both"], correct: "Both" },
      { scenario: "How long does a child marriage annulment take to process in court?", options: ["1 month", "3 months", "6 months"], correct: "3 months" },
      { scenario: "Which of these are often the consequences of child marriages?", options: ["Early pregnancy", "Health risks", "Educational disruption", "All of the above"], correct: "All of the above" }
    ]
  },
   dowry: {
  easy: [
    { scenario: "Which Act addresses dowry harassment in India?", options: ["Dowry Prohibition Act, 1961", "Protection of Women from Domestic Violence Act, 2005"], correct: "Dowry Prohibition Act, 1961" },
    { scenario: "What is the punishment for giving or receiving dowry under Indian law?", options: ["1 year imprisonment", "3 years imprisonment", "5 years imprisonment"], correct: "5 years imprisonment" },
    { scenario: "Can a woman file a complaint of dowry harassment after marriage?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the minimum imprisonment for dowry harassment?", options: ["1 year", "3 years", "5 years"], correct: "3 years" },
    { scenario: "Which of the following is considered dowry harassment?", options: ["Physical abuse", "Verbal abuse", "Demand for money", "All of the above"], correct: "All of the above" }
  ],
  medium: [
    { scenario: "Who can file a complaint under the Dowry Prohibition Act?", options: ["Only married women", "Any woman", "Anyone who has witnessed it"], correct: "Any woman" },
    { scenario: "Can dowry harassment lead to a woman's arrest?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which authority investigates dowry harassment cases?", options: ["Police", "Social worker", "Magistrate"], correct: "Police" },
    { scenario: "What are the possible punishments for dowry harassment under the Indian Penal Code?", options: ["1-3 years imprisonment", "3-5 years imprisonment", "10 years imprisonment"], correct: "3-5 years imprisonment" },
    { scenario: "What kind of evidence can be used in dowry harassment cases?", options: ["Video recordings", "Witness testimony", "Written communication", "All of the above"], correct: "All of the above" }
  ],
  hard: [
    { scenario: "What does Section 498A of the Indian Penal Code deal with?", options: ["Dowry harassment", "Sexual harassment", "Child abuse", "Domestic violence"], correct: "Dowry harassment" },
    { scenario: "Which is the penalty for demanding dowry under the Dowry Prohibition Act?", options: ["1-2 years imprisonment", "3 years imprisonment", "5 years imprisonment"], correct: "3 years imprisonment" },
    { scenario: "Can a man be punished under the Dowry Prohibition Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can dowry harassment cases be filed even after divorce?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which of the following is a defense against a dowry harassment charge?", options: ["Proving it was a misunderstanding", "Proving the demand was for personal reasons", "None"], correct: "None" }
  ]
}
,
    domestic_violence: {
  easy: [
    { scenario: "Which act addresses domestic violence against women in India?", options: ["Protection of Women from Domestic Violence Act, 2005", "Dowry Prohibition Act, 1961"], correct: "Protection of Women from Domestic Violence Act, 2005" },
    { scenario: "What is the maximum punishment for domestic violence under Indian law?", options: ["2 years imprisonment", "5 years imprisonment", "10 years imprisonment"], correct: "5 years imprisonment" },
    { scenario: "Who can file a complaint under the Domestic Violence Act?", options: ["Only married women", "Any woman", "Only those with children"], correct: "Any woman" },
    { scenario: "What is the first step for a woman filing a domestic violence complaint?", options: ["File an FIR", "File a complaint with the police", "File a complaint with the magistrate"], correct: "File a complaint with the magistrate" },
    { scenario: "Can a woman get protection from the abuser under the Domestic Violence Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What kind of protection can a woman seek under the Domestic Violence Act?", options: ["Residence orders", "Monetary relief", "Both"], correct: "Both" },
    { scenario: "Can a woman get custody of her children under the Domestic Violence Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What does the Domestic Violence Act aim to protect women from?", options: ["Physical abuse", "Emotional abuse", "Sexual abuse", "All of the above"], correct: "All of the above" },
    { scenario: "What is the time limit for a woman to file a complaint under the Domestic Violence Act?", options: ["6 months", "1 year", "3 years"], correct: "3 years" },
    { scenario: "Which authority is responsible for enforcing the Domestic Violence Act?", options: ["Police", "Magistrate", "Protection Officer"], correct: "Magistrate" }
  ],
  medium: [
    { scenario: "Who can file a complaint under the Domestic Violence Act?", options: ["Only married women", "Any woman", "Only those with children"], correct: "Any woman" },
    { scenario: "What is the first step for a woman filing a domestic violence complaint?", options: ["File an FIR", "File a complaint with the police", "File a complaint with the magistrate"], correct: "File a complaint with the magistrate" },
    { scenario: "What is the role of the Protection Officer under the Domestic Violence Act?", options: ["Assist the complainant", "Report the case to the police", "Both"], correct: "Both" },
    { scenario: "Under the Domestic Violence Act, what is the maximum period of time for the protection orders?", options: ["1 year", "2 years", "3 years"], correct: "2 years" },
    { scenario: "Under the Domestic Violence Act, which of the following is considered an act of domestic violence?", options: ["Physical harm", "Mental cruelty", "Economic abuse", "All of the above"], correct: "All of the above" },
    { scenario: "What is the maximum monetary relief a woman can get under the Domestic Violence Act?", options: ["₹10,000", "₹50,000", "₹1,00,000"], correct: "₹20,000 per month" },
    { scenario: "Which of the following is NOT a form of domestic violence under the Domestic Violence Act?", options: ["Verbal abuse", "Physical abuse", "Financial independence", "Sexual abuse"], correct: "Financial independence" },
    { scenario: "Who has the right to reside in a shared household under the Domestic Violence Act?", options: ["Only the wife", "Any woman in a relationship", "Any family member"], correct: "Any woman in a relationship" },
    { scenario: "Can a woman obtain compensation for emotional distress under the Domestic Violence Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a man file a complaint of domestic violence under the Domestic Violence Act?", options: ["Yes", "No"], correct: "Yes" }
  ],
  hard: [
    { scenario: "What is the role of the Protection Officer under the Domestic Violence Act?", options: ["Assist the complainant", "Report the case to the police", "Both"], correct: "Both" },
    { scenario: "Under the Domestic Violence Act, which authority can issue protection orders?", options: ["Magistrate", "Police", "Court"], correct: "Magistrate" },
    { scenario: "What is the punishment for violation of a protection order under the Domestic Violence Act?", options: ["1 year imprisonment", "Up to 3 years imprisonment", "Fine"], correct: "Up to 3 years imprisonment" },
    { scenario: "Under the Domestic Violence Act, a woman can seek relief in case of which kind of abuse?", options: ["Sexual", "Physical", "Emotional", "All of the above"], correct: "All of the above" },
    { scenario: "What is the role of the court in the enforcement of orders under the Domestic Violence Act?", options: ["Provide protection", "Provide compensation", "Both", "None of the above"], correct: "Both" },
    { scenario: "Who can be charged under the Domestic Violence Act?", options: ["Only the husband", "The husband and in-laws", "Only the wife"], correct: "The husband and in-laws" },
    { scenario: "What is the duration of a protection order under the Domestic Violence Act?", options: ["1 year", "2 years", "Indefinite"], correct: "Indefinite" },
    { scenario: "Which of the following is NOT considered a form of domestic violence?", options: ["Threatening", "Emotional abuse", "Mental support", "Physical harm"], correct: "Mental support" },
    { scenario: "What does the Domestic Violence Act allow women to claim from their abuser?", options: ["Alimony", "Monetary relief", "Custody of children", "All of the above"], correct: "All of the above" },
    { scenario: "Under the Domestic Violence Act, what kind of abuse can lead to a protection order?", options: ["Physical abuse", "Sexual abuse", "Emotional abuse", "All of the above"], correct: "All of the above" }
  ]
}
,
    acid_attacks: {
  easy: [
    { scenario: "What is an acid attack?", options: ["Throwing acid on someone", "Verbal harassment", "Financial exploitation"], correct: "Throwing acid on someone" },
    { scenario: "Which law deals with acid attacks in India?", options: ["The Indian Penal Code", "The Protection of Women from Domestic Violence Act", "The Acid Attack Law"], correct: "The Indian Penal Code" },
    { scenario: "What is the punishment for acid attack under IPC?", options: ["Life imprisonment", "5 years imprisonment", "Death penalty"], correct: "Life imprisonment" },
    { scenario: "Acid attacks are primarily targeted at which gender?", options: ["Women", "Men", "Children"], correct: "Women" },
    { scenario: "Is acid attack a form of gender-based violence?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can victims of acid attacks claim compensation?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What does the Acid Attack Law focus on?", options: ["Regulating acid sale", "Protecting women from domestic violence", "Punishing offenders of acid attacks"], correct: "Regulating acid sale" },
    { scenario: "Can the acid attack victim file a complaint immediately?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is the selling of acid without a license illegal?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is a major consequence for the accused in acid attack cases?", options: ["Imprisonment", "Fines", "Both"], correct: "Both" }
  ],
  medium: [
    { scenario: "What are the primary reasons for acid attacks?", options: ["Revenge", "Financial issues", "Emotional distress"], correct: "Revenge" },
    { scenario: "What is the minimum punishment for acid attack under Section 326B IPC?", options: ["5 years imprisonment", "10 years imprisonment", "Life imprisonment"], correct: "10 years imprisonment" },
    { scenario: "Which section of the IPC covers acid attacks?", options: ["Section 307", "Section 326B", "Section 376"], correct: "Section 326B" },
    { scenario: "Under the Nirbhaya Fund, what assistance is provided to acid attack victims?", options: ["Financial assistance", "Legal support", "Both"], correct: "Both" },
    { scenario: "What is a major legal challenge in acid attack cases?", options: ["Evidence collection", "Proving intent", "Both"], correct: "Both" },
    { scenario: "What should a victim do immediately after an acid attack?", options: ["Report to police", "Seek medical help", "Both"], correct: "Both" },
    { scenario: "Are acid attack victims entitled to free medical treatment?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What can acid attack victims seek compensation for?", options: ["Medical expenses", "Psychological rehabilitation", "Both"], correct: "Both" },
    { scenario: "Are acid attacks considered premeditated crimes?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which of these is considered a common target for acid attacks?", options: ["Women", "Men", "Children"], correct: "Women" }
  ],
  hard: [
    { scenario: "What was the landmark case in acid attack jurisprudence in India?", options: ["Laxmi vs. Union of India", "Shreya Singhal vs. Union of India", "Rajeshwari vs. Union of India"], correct: "Laxmi vs. Union of India" },
    { scenario: "What is the role of police in acid attack cases?", options: ["Investigating the case", "Providing compensation", "Offering medical help"], correct: "Investigating the case" },
    { scenario: "Which organization supports acid attack victims in India?", options: ["Laxmi Foundation", "National Commission for Women", "Legal Aid Society"], correct: "Laxmi Foundation" },
    { scenario: "Can acid attacks be categorized as attempted murder?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What happens if an acid attack results in permanent disability?", options: ["The offender is charged with murder", "The punishment is aggravated", "The victim receives special compensation"], correct: "The punishment is aggravated" },
    { scenario: "What is the primary challenge for acid attack victims in terms of justice?", options: ["Proving the identity of the attacker", "Proving physical harm", "Access to legal representation"], correct: "Proving the identity of the attacker" },
    { scenario: "What type of compensation is available for acid attack victims?", options: ["Emergency financial aid", "Permanent disability benefits", "Both"], correct: "Both" },
    { scenario: "Which of these sections is particularly important for acid attack cases?", options: ["Section 357 IPC", "Section 326B IPC", "Section 482 IPC"], correct: "Section 326B IPC" },
    { scenario: "How does the court differentiate between an acid attack and a regular assault?", options: ["Severity of injury", "Use of acid", "Intention to cause harm"], correct: "Use of acid" },
    { scenario: "What long-term support is necessary for acid attack victims?", options: ["Medical treatment", "Psychological support", "Both"], correct: "Both" }
  ]
},

cyberbullying: {
  easy: [
    { scenario: "What is cyberbullying?", options: ["Bullying in person", "Online harassment", "Both"], correct: "Online harassment" },
    { scenario: "Which platform is commonly used for cyberbullying?", options: ["Social media", "Emails", "Both"], correct: "Both" },
    { scenario: "Who can be a victim of cyberbullying?", options: ["Only adults", "Only teenagers", "Anyone"], correct: "Anyone" },
    { scenario: "Is cyberbullying punishable by law in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the first step if someone is being cyberbullied?", options: ["Ignore it", "Report to the authorities", "Engage with the bully"], correct: "Report to the authorities" },
    { scenario: "Which act governs cyberbullying in India?", options: ["The IT Act, 2000", "The Indian Penal Code", "The Protection of Women from Domestic Violence Act"], correct: "The IT Act, 2000" },
    { scenario: "What is the punishment for cyberbullying under Section 66A of the IT Act?", options: ["Fine", "Imprisonment", "Both"], correct: "Both" },
    { scenario: "Is online defamation a form of cyberbullying?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a victim of cyberbullying seek legal help?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which of these is a form of cyberbullying?", options: ["Trolling", "Phishing", "Both"], correct: "Both" }
  ],
  medium: [
    { scenario: "How can someone protect themselves from cyberbullying?", options: ["Use privacy settings", "Avoid interacting with strangers online", "Both"], correct: "Both" },
    { scenario: "What is the primary objective of a cyberbully?", options: ["To spread positivity", "To harm the victim", "To entertain"], correct: "To harm the victim" },
    { scenario: "What is the punishment for sending threatening emails under the IT Act?", options: ["Up to 2 years imprisonment", "Up to 3 years imprisonment", "Up to 5 years imprisonment"], correct: "Up to 3 years imprisonment" },
    { scenario: "Can cyberbullying occur through fake social media profiles?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What role do social media platforms have in preventing cyberbullying?", options: ["Monitoring content", "Taking down abusive posts", "Both"], correct: "Both" },
    { scenario: "Which section of the Indian Penal Code addresses online defamation?", options: ["Section 66A", "Section 499", "Section 503"], correct: "Section 499" },
    { scenario: "What should parents do if their child is a victim of cyberbullying?", options: ["Report the issue to authorities", "Punish the child", "Ignore it"], correct: "Report the issue to authorities" },
    { scenario: "What is the key feature of cyberbullying?", options: ["It happens in person", "It happens via the internet", "It happens via phone calls"], correct: "It happens via the internet" },
    { scenario: "Is revenge porn considered a form of cyberbullying?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "How can a victim of cyberbullying collect evidence?", options: ["Screenshots", "Save chats", "Both"], correct: "Both" }
  ],
  hard: [
    { scenario: "What is the legal action taken for cyberstalking in India?", options: ["Imprisonment", "Fines", "Both"], correct: "Both" },
    { scenario: "What does Section 66C of the IT Act criminalize?", options: ["Identity theft", "Cyberbullying", "Child pornography"], correct: "Identity theft" },
    { scenario: "What is the role of the National Cyber Crime Reporting Portal?", options: ["Reporting crimes", "Investigating crimes", "Providing legal advice"], correct: "Reporting crimes" },
    { scenario: "Which section of the IT Act addresses cyberbullying through email?", options: ["Section 66A", "Section 66E", "Section 66F"], correct: "Section 66A" },
    { scenario: "What is a key challenge in prosecuting cyberbullying cases?", options: ["Anonymity of the bully", "Lack of evidence", "Both"], correct: "Both" },
    { scenario: "Which of these behaviors is commonly associated with cyberbullying?", options: ["Trolling", "Blackmailing", "Both"], correct: "Both" },
    { scenario: "What is the punishment for distributing obscene material under the IT Act?", options: ["Up to 5 years imprisonment", "Up to 3 years imprisonment", "Up to 7 years imprisonment"], correct: "Up to 5 years imprisonment" },
    { scenario: "Can a victim of cyberbullying file an FIR?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What steps can the government take to prevent cyberbullying?", options: ["Create awareness", "Enforce strict laws", "Both"], correct: "Both" },
    { scenario: "What is the term 'cyberbullying' defined under?", options: ["Indian Penal Code", "The IT Act, 2000", "Both"], correct: "The IT Act, 2000" }
  ]
},
  
human_trafficking: {
    easy: [
      { scenario: "What does human trafficking involve?", options: ["Recruitment, transportation, and exploitation of individuals", "Providing employment opportunities", "Offering educational scholarships"], correct: "Recruitment, transportation, and exploitation of individuals" },
      { scenario: "Which Indian law primarily addresses human trafficking?", options: ["The Immoral Traffic (Prevention) Act, 1956", "The Indian Penal Code, 1860", "The Protection of Children from Sexual Offences Act, 2012"], correct: "The Immoral Traffic (Prevention) Act, 1956" },
      { scenario: "Under which article of the Indian Constitution is human trafficking prohibited?", options: ["Article 23", "Article 21", "Article 19"], correct: "Article 23" },
      { scenario: "Is bonded labor considered a form of human trafficking?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which government body in India addresses human trafficking issues?", options: ["Ministry of Home Affairs", "Ministry of External Affairs", "Ministry of Women and Child Development"], correct: "Ministry of Home Affairs" },
      { scenario: "Can victims of human trafficking receive legal protection in India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is trafficking for sexual exploitation illegal in India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are there specific laws in India to prevent child trafficking?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does India have international agreements to combat human trafficking?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can individuals be trafficked for labor exploitation in India?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Which section of the Indian Penal Code criminalizes trafficking offenses?", options: ["Section 370", "Section 376", "Section 420"], correct: "Section 370" },
      { scenario: "What is the minimum punishment for trafficking under Section 370 IPC?", options: ["Seven years imprisonment", "Five years imprisonment", "Ten years imprisonment"], correct: "Seven years imprisonment" },
      { scenario: "Are there specialized law enforcement units to handle trafficking cases in India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the Immoral Traffic (Prevention) Act, 1956 focus solely on sexual exploitation?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What is the role of the Anti-Trafficking Cell in India?", options: ["Address law enforcement responses to trafficking", "Provide victim rehabilitation services", "Conduct public awareness campaigns"], correct: "Address law enforcement responses to trafficking" },
      { scenario: "Can victims of trafficking in India access rehabilitation services?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are there provisions in Indian law to protect witnesses in trafficking cases?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is there a national database for tracking trafficking cases in India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Do Indian laws provide for the confiscation of assets from traffickers?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are there NGOs in India that assist trafficking victims?", options: ["Yes", "No"], correct: "Yes" }
    ],
    hard: [
      { scenario: "Which international protocol has India ratified to prevent human trafficking?", options: ["The Palermo Protocol", "The Hague Convention", "The Geneva Convention"], correct: "The Palermo Protocol" },
      { scenario: "What is the primary challenge in prosecuting trafficking cases in India?", options: ["Victim reluctance to testify", "Lack of evidence", "Both A and B"], correct: "Both A and B" },
      { scenario: "Does India have a national action plan to combat human trafficking?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are there specific laws addressing the trafficking of women and children in India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What is the role of the National Human Rights Commission concerning trafficking?", options: ["Monitor and investigate trafficking cases", "Provide legal aid to victims", "Both A and B"], correct: "Both A and B" },
      { scenario: "Has India established special courts to expedite trafficking trials?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are there bilateral agreements between India and neighboring countries to prevent trafficking?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What measures are in place to prevent the trafficking of migrant workers in India?", options: ["Pre-departure orientation programs", "Strict recruitment agency regulations", "Both A and B"], correct: "Both A and B" },
      { scenario: "Is there a dedicated fund in India for the rehabilitation of trafficking victims?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "How does the judiciary in India handle cases involving transnational trafficking?", options: ["Through special tribunals", "Under regular criminal procedures", "By collaborating with international courts"], correct: "Under regular criminal procedures" }
    ]
  },

female_infanticide: {
  easy: [
    { scenario: "What is female infanticide?", options: ["The act of aborting a female fetus", "The killing of a female infant after birth", "Both A and B"], correct: "Both A and B" },
    { scenario: "Which Indian law specifically addresses female infanticide?", options: ["The Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994", "The Indian Penal Code, 1860", "The Protection of Children from Sexual Offences Act, 2012"], correct: "The Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994" },
    { scenario: "What does the Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994 prohibit?", options: ["Sex-selective abortions", "Sale of infant girls", "Early marriage of girls"], correct: "Sex-selective abortions" },
    { scenario: "Is female infanticide illegal in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What punishment does the law provide for those committing female infanticide?", options: ["Imprisonment for life", "Death penalty", "Seven years imprisonment"], correct: "Imprisonment for life" },
    { scenario: "Does the law allow the use of ultrasound to determine the sex of a fetus?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Which body enforces laws against female infanticide in India?", options: ["Ministry of Health and Family Welfare", "Ministry of Women and Child Development", "Ministry of Home Affairs"], correct: "Ministry of Health and Family Welfare" },
    { scenario: "What is the primary cause of female infanticide in India?", options: ["Cultural preference for sons", "Poverty", "Lack of education"], correct: "Cultural preference for sons" },
    { scenario: "Is there a significant gender imbalance in India due to female infanticide?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What can be done to reduce female infanticide in India?", options: ["Strict enforcement of laws", "Awareness campaigns", "Both A and B"], correct: "Both A and B" }
  ],
  medium: [
    { scenario: "Which section of the Indian Penal Code deals with the crime of female infanticide?", options: ["Section 302", "Section 304", "Section 315"], correct: "Section 315" },
    { scenario: "Does India have laws for the protection of the rights of the girl child?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the impact of female infanticide on society?", options: ["Gender imbalance", "Increase in population", "Decrease in female literacy"], correct: "Gender imbalance" },
    { scenario: "Which organization helps in monitoring female infanticide cases in India?", options: ["National Commission for Women", "National Human Rights Commission", "UNICEF"], correct: "National Commission for Women" },
    { scenario: "What measures have been introduced to prevent female infanticide in India?", options: ["Awareness campaigns", "Stricter laws", "Both A and B"], correct: "Both A and B" },
    { scenario: "What is the penalty for conducting a sex determination test in India?", options: ["Fine", "Imprisonment", "Both A and B"], correct: "Both A and B" },
    { scenario: "What is the role of the Pre-Conception and Pre-Natal Diagnostic Techniques Act?", options: ["Regulating the use of prenatal diagnostic tests", "Promoting female education", "Encouraging balanced sex ratios"], correct: "Regulating the use of prenatal diagnostic tests" },
    { scenario: "What effect does female infanticide have on the female population in India?", options: ["Decreases the female population", "Increases the female population", "No effect on the female population"], correct: "Decreases the female population" },
    { scenario: "Are there any campaigns focused on reducing female infanticide in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "How can society help reduce female infanticide?", options: ["Promoting gender equality", "Educating parents", "Both A and B"], correct: "Both A and B" }
  ],
  hard: [
    { scenario: "What is the root cause of female infanticide in rural areas of India?", options: ["Cultural preference for sons", "Illiteracy", "Gender-based violence"], correct: "Cultural preference for sons" },
    { scenario: "Which international convention has India ratified to ensure the rights of the girl child?", options: ["The Convention on the Rights of the Child", "The Universal Declaration of Human Rights", "The Beijing Platform for Action"], correct: "The Convention on the Rights of the Child" },
    { scenario: "What is the effect of female infanticide on the sex ratio in India?", options: ["Significant male skew", "Balanced sex ratio", "Female skew"], correct: "Significant male skew" },
    { scenario: "Has India made any progress in reducing female infanticide over the last decade?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the role of the National Human Rights Commission regarding female infanticide?", options: ["Monitor gender equality", "Provide legal aid", "Both A and B"], correct: "Both A and B" },
    { scenario: "What challenge do authorities face in prosecuting female infanticide cases?", options: ["Lack of evidence", "Cultural acceptance", "Lack of witnesses"], correct: "Both A and B" },
    { scenario: "How does the Indian government plan to tackle female infanticide in the future?", options: ["Through better enforcement", "By promoting gender equality", "Both A and B"], correct: "Both A and B" },
    { scenario: "Has the Indian judiciary established any specialized courts for female infanticide cases?", options: ["Yes", "No"], correct: "No" },
    { scenario: "What preventive measures are being taken to reduce female infanticide in India?", options: ["Awareness campaigns", "Government regulations", "Both A and B"], correct: "Both A and B" },
    { scenario: "How does the Indian Penal Code address female infanticide?", options: ["Through penalties", "By recognizing it as murder", "By offering rehabilitation to offenders"], correct: "By recognizing it as murder" }
  ]
},

workplace_rights: {
  easy: [
    { scenario: "What is the main purpose of workplace rights?", options: ["To protect employees from exploitation", "To promote workplace efficiency", "To regulate salaries"], correct: "To protect employees from exploitation" },
    { scenario: "Which Indian law protects employees from unfair labor practices?", options: ["The Industrial Disputes Act, 1947", "The Factories Act, 1948", "The Equal Remuneration Act, 1976"], correct: "The Industrial Disputes Act, 1947" },
    { scenario: "Is sexual harassment at the workplace illegal in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law specifically addresses sexual harassment at the workplace in India?", options: ["The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013", "The Industrial Disputes Act, 1947", "The Equal Remuneration Act, 1976"], correct: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013" },
    { scenario: "Can employees take legal action against workplace discrimination in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which Indian law ensures equal pay for equal work?", options: ["The Equal Remuneration Act, 1976", "The Payment of Wages Act, 1936", "The Minimum Wages Act, 1948"], correct: "The Equal Remuneration Act, 1976" },
    { scenario: "What is the primary aim of labor laws in India?", options: ["Regulate working conditions", "Ensure employee rights", "Both A and B"], correct: "Both A and B" },
    { scenario: "Does India have laws against child labor?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is forced labor allowed under Indian law?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Are maternity benefits available to working women in India?", options: ["Yes", "No"], correct: "Yes" }
  ],
  medium: [
    { scenario: "What is the minimum wage fixed by the government of India?", options: ["Varies by state", "Fixed nationwide", "Based on sector"], correct: "Varies by state" },
    { scenario: "What does the Industrial Disputes Act, 1947 address?", options: ["Employment disputes", "Disciplinary actions", "Wages"], correct: "Employment disputes" },
    { scenario: "Does the law provide for the right to form unions?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law protects employees from unfair dismissal in India?", options: ["The Industrial Disputes Act, 1947", "The Payment of Wages Act, 1936", "The Trade Unions Act, 1926"], correct: "The Industrial Disputes Act, 1947" },
    { scenario: "What is the role of the Factories Act, 1948?", options: ["Regulating health and safety in factories", "Setting wage standards", "Protecting the rights of child laborers"], correct: "Regulating health and safety in factories" },
    { scenario: "Does Indian law allow for paid sick leave?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are workers entitled to compensation for workplace injuries?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the role of labor courts in India?", options: ["Resolve disputes between workers and employers", "Protect worker rights", "Both A and B"], correct: "Both A and B" },
    { scenario: "Are there any protections against discrimination at work in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can women be discriminated against in the workplace in India?", options: ["Yes", "No"], correct: "No" }
  ],
  hard: [
    { scenario: "What is the role of the National Commission for Women regarding workplace rights?", options: ["Advocates for women's rights", "Handles workplace complaints", "Both A and B"], correct: "Both A and B" },
    { scenario: "Which law mandates the establishment of grievance redressal mechanisms at the workplace?", options: ["The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013", "The Industrial Disputes Act, 1947", "The Equal Remuneration Act, 1976"], correct: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013" },
    { scenario: "How does the Indian law define 'forced labor'?", options: ["Labor done under threat", "Labor done voluntarily", "Labor done under contract"], correct: "Labor done under threat" },
    { scenario: "Which international convention has India ratified to prevent discrimination at work?", options: ["International Labour Organization (ILO) Convention No. 111", "The Universal Declaration of Human Rights", "The Geneva Convention"], correct: "International Labour Organization (ILO) Convention No. 111" },
    { scenario: "What does the Equal Remuneration Act, 1976 aim to eliminate?", options: ["Discrimination in wages based on gender", "Unequal work conditions", "Child labor"], correct: "Discrimination in wages based on gender" },
    { scenario: "What does the Trade Unions Act, 1926 ensure?", options: ["Right to form unions", "Right to negotiate wages", "Both A and B"], correct: "Both A and B" },
    { scenario: "Is forced overtime allowed under Indian law?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Does Indian law provide for the right to retirement benefits?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are there laws that ensure the right to paid leave in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What impact does the Protection of Women from Sexual Harassment at Workplace Act have?", options: ["Promotes a safe working environment for women", "Encourages sexual harassment", "Both A and B"], correct: "Promotes a safe working environment for women" }
  ]
},
sexual_harassment: {
  easy: [
    { scenario: "What is the minimum age to file a sexual harassment complaint in India?", options: ["16 years", "18 years", "21 years"], correct: "16 years" },
    { scenario: "Which act deals with sexual harassment of women at the workplace in India?", options: ["Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013", "Dowry Prohibition Act, 1961"], correct: "Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013" },
    { scenario: "Who is responsible for setting up the Internal Complaints Committee (ICC) in a workplace?", options: ["Employer", "Employee", "Government"], correct: "Employer" },
    { scenario: "Under the Sexual Harassment Act, what is the maximum time frame for reporting an incident?", options: ["3 months", "6 months", "1 year"], correct: "3 months" },
    { scenario: "Can a woman file a sexual harassment complaint against a colleague?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the role of the Vishakha guidelines in sexual harassment cases?", options: ["Provide legal protection to women", "Formulate workplace harassment policies", "Both"], correct: "Both" },
    { scenario: "Is verbal abuse considered a form of sexual harassment?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What kind of behavior is classified as sexual harassment?", options: ["Unwelcome physical contact", "Sexual comments", "Both"], correct: "Both" },
    { scenario: "Can sexual harassment occur in virtual spaces or online?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Does sexual harassment only apply to physical contact?", options: ["Yes", "No"], correct: "No" }
  ],
  medium: [
    { scenario: "What is the maximum penalty for a person convicted of sexual harassment in India?", options: ["Imprisonment up to 2 years", "Imprisonment up to 5 years", "Imprisonment up to 7 years"], correct: "Imprisonment up to 5 years" },
    { scenario: "Which of the following is an example of sexual harassment under the Sexual Harassment Act?", options: ["Sending inappropriate messages", "Leering or making suggestive gestures", "Both"], correct: "Both" },
    { scenario: "Who can be a complainant under the Sexual Harassment Act?", options: ["Only women", "Both men and women", "Only men"], correct: "Only women" },
    { scenario: "How many members are required in the Internal Complaints Committee (ICC)?", options: ["4", "5", "6"], correct: "4" },
    { scenario: "Can a complaint of sexual harassment be filed after the incident has occurred?", options: ["Yes, within 3 months", "No, must be filed within 1 month", "Yes, within 6 months"], correct: "Yes, within 3 months" },
    { scenario: "Which of the following is not a component of the Sexual Harassment Act?", options: ["Workplace harassment prevention", "Victim compensation", "Maternity leave"], correct: "Maternity leave" },
    { scenario: "Who investigates the complaint of sexual harassment in the workplace?", options: ["Police", "Internal Complaints Committee", "District Court"], correct: "Internal Complaints Committee" },
    { scenario: "Can an employee be transferred to another workplace after filing a sexual harassment complaint?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the primary objective of the Sexual Harassment of Women at Workplace Act?", options: ["Ensure the safety of women", "Promote gender equality", "Both"], correct: "Both" },
    { scenario: "What is the role of the employer in preventing sexual harassment at the workplace?", options: ["To ensure that the workplace is free from harassment", "To provide compensation to the victim", "Both"], correct: "To ensure that the workplace is free from harassment" }
  ],
  hard: [
    { scenario: "What is the role of the Local Complaints Committee (LCC) under the Sexual Harassment Act?", options: ["Investigating complaints", "Providing counseling services", "Both"], correct: "Both" },
    { scenario: "What does the term 'unwelcome sexual advances' imply under Indian law?", options: ["Any unsolicited sexual behavior", "Only physical behavior", "Only verbal behavior"], correct: "Any unsolicited sexual behavior" },
    { scenario: "What action can be taken against an employee found guilty of sexual harassment?", options: ["Suspension", "Dismissal", "Both"], correct: "Both" },
    { scenario: "What is the primary responsibility of an employer under the Sexual Harassment Act?", options: ["Ensure a safe working environment", "Provide legal counsel to victims", "Both"], correct: "Ensure a safe working environment" },
    { scenario: "Under the Sexual Harassment Act, what is the maximum penalty for false complaints?", options: ["Fine of ₹50,000", "Imprisonment up to 1 year", "Both"], correct: "Imprisonment up to 1 year" },
    { scenario: "Which of the following is considered as a violation of the Sexual Harassment Act?", options: ["Making sexual jokes", "Leering", "Both"], correct: "Both" },
    { scenario: "Who decides the compensation amount in cases of sexual harassment?", options: ["Court", "Internal Complaints Committee", "Government"], correct: "Internal Complaints Committee" },
    { scenario: "Which international convention addresses sexual harassment in the workplace?", options: ["ILO Convention 190", "CEDAW", "UDHR"], correct: "ILO Convention 190" },
    { scenario: "What is the legal time frame for resolving a sexual harassment case under the Sexual Harassment Act?", options: ["3 months", "6 months", "1 year"], correct: "3 months" },
    { scenario: "What is the procedure for a victim to seek legal remedy under the Sexual Harassment Act?", options: ["Filing a complaint with the Internal Complaints Committee", "Approaching the police directly", "Both"], correct: "Filing a complaint with the Internal Complaints Committee" }
  ]
},
online_privacy: {
  easy: [
    { scenario: "Is it legal to share someone's private photo without consent?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Which act protects digital privacy in India?", options: ["IT Act, 2000", "Right to Privacy Act"], correct: "IT Act, 2000" },
    { scenario: "Should you share your passwords with others?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Can apps collect your location without permission?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Is your personal data safe on public Wi-Fi?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Is cyberstalking a punishable offense in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Should you use two-factor authentication for better online privacy?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is your IP address considered personal data?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is using strong passwords important for online privacy?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can your personal data be misused if your phone is hacked?", options: ["Yes", "No"], correct: "Yes" }
  ],
  medium: [
    { scenario: "Which section of the IT Act deals with data breach?", options: ["Section 72", "Section 67"], correct: "Section 72" },
    { scenario: "What is the penalty for violating online privacy?", options: ["Fine of ₹5 lakh", "Imprisonment up to 3 years", "Both"], correct: "Both" },
    { scenario: "Which law covers identity theft and impersonation online?", options: ["Section 66C of IT Act", "Section 69 of IPC"], correct: "Section 66C of IT Act" },
    { scenario: "Who is responsible for protecting user data on websites?", options: ["User", "Website/Platform"], correct: "Website/Platform" },
    { scenario: "Which of the following is a threat to online privacy?", options: ["Phishing", "Antivirus software"], correct: "Phishing" },
    { scenario: "Which authority can investigate online privacy violations in India?", options: ["Cyber Crime Cell", "Income Tax Department"], correct: "Cyber Crime Cell" },
    { scenario: "What is spyware?", options: ["A tool to enhance security", "A software that secretly collects data"], correct: "A software that secretly collects data" },
    { scenario: "What is end-to-end encryption used for?", options: ["Faster internet", "Protecting message content"], correct: "Protecting message content" },
    { scenario: "Which Indian government initiative focuses on digital privacy awareness?", options: ["Cyber Surakshit Bharat", "Swachh Bharat Abhiyan"], correct: "Cyber Surakshit Bharat" },
    { scenario: "What is considered a violation of online privacy?", options: ["Tracking user activity without consent", "Logging out of your account"], correct: "Tracking user activity without consent" }
  ],
  hard: [
    { scenario: "What landmark case declared privacy as a fundamental right?", options: ["Puttaswamy vs Union of India", "Keshavananda Bharati vs State of Kerala"], correct: "Puttaswamy vs Union of India" },
    { scenario: "Which article of the Indian Constitution is linked to the right to privacy?", options: ["Article 21", "Article 19"], correct: "Article 21" },
    { scenario: "Which authority is proposed to regulate data protection in India?", options: ["Data Protection Board", "Supreme Court"], correct: "Data Protection Board" },
    { scenario: "Which international law influences Indian data privacy norms?", options: ["GDPR", "HIPAA"], correct: "GDPR" },
    { scenario: "What is the penalty under the Digital Personal Data Protection Act, 2023 for data breach?", options: ["Up to ₹250 crore", "₹1 lakh"], correct: "Up to ₹250 crore" },
    { scenario: "What does Section 43A of the IT Act deal with?", options: ["Compensation for failure to protect data", "Unauthorized access"], correct: "Compensation for failure to protect data" },
    { scenario: "Which body drafted the Data Protection Bill in India?", options: ["Justice B.N. Srikrishna Committee", "Law Commission of India"], correct: "Justice B.N. Srikrishna Committee" },
    { scenario: "What is 'consent fatigue' in online privacy?", options: ["Too many consent requests leading to careless acceptance", "Overuse of apps"], correct: "Too many consent requests leading to careless acceptance" },
    { scenario: "What does anonymization of data mean?", options: ["Removing personal identifiers", "Deleting data permanently"], correct: "Removing personal identifiers" },
    { scenario: "What principle ensures users know what data is collected and why?", options: ["Transparency", "Efficiency"], correct: "Transparency" }
  ]
},
right_to_education: {
  easy: [
    { scenario: "Which act ensures free and compulsory education for children in India?", options: ["Right to Education Act, 2009", "Child Protection Act, 2006"], correct: "Right to Education Act, 2009" },
    { scenario: "Up to what age is education free under RTE Act?", options: ["14 years", "18 years", "16 years"], correct: "14 years" },
    { scenario: "Right to Education is a part of which right?", options: ["Right to Life", "Right to Equality", "Right to Vote"], correct: "Right to Life" },
    { scenario: "Is education a fundamental right in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "The RTE Act applies to which age group?", options: ["6–14 years", "3–18 years", "10–15 years"], correct: "6–14 years" },
    { scenario: "Are private unaided schools covered under RTE?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Does RTE Act cover pre-school education?", options: ["No", "Yes"], correct: "No" },
    { scenario: "Does RTE apply to government schools?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are mid-day meals part of RTE implementation?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "RTE ensures education without _______.", options: ["fees", "books", "exams"], correct: "fees" }
  ],
  medium: [
    { scenario: "Which article in the Indian Constitution guarantees the right to education?", options: ["Article 21A", "Article 19", "Article 25"], correct: "Article 21A" },
    { scenario: "Private schools must reserve what percent of seats for economically weaker sections?", options: ["15%", "25%", "10%"], correct: "25%" },
    { scenario: "In which year was Article 21A added to the Constitution?", options: ["2002", "2005", "2010"], correct: "2002" },
    { scenario: "Who is responsible for providing free education under RTE?", options: ["State and Central Governments", "Private Schools only", "NGOs"], correct: "State and Central Governments" },
    { scenario: "What is the minimum number of working days for upper primary classes under RTE?", options: ["220", "200", "180"], correct: "220" },
    { scenario: "Which schedule in the RTE Act specifies norms for schools?", options: ["Schedule I", "Schedule II", "Schedule III"], correct: "Schedule I" },
    { scenario: "Which authority maintains the list of recognized schools under RTE?", options: ["State Education Department", "CBSE", "NCERT"], correct: "State Education Department" },
    { scenario: "What is the pupil-teacher ratio under RTE for primary schools?", options: ["30:1", "35:1", "40:1"], correct: "30:1" },
    { scenario: "Which level of schooling is directly covered under RTE?", options: ["Elementary", "Secondary", "Higher Secondary"], correct: "Elementary" },
    { scenario: "Who can file a complaint against RTE violation?", options: ["Any parent or guardian", "Only school staff", "Only police"], correct: "Any parent or guardian" }
  ],
  hard: [
    { scenario: "Which body monitors implementation of the RTE Act?", options: ["NCPCR", "NCERT", "CBSE"], correct: "NCPCR" },
    { scenario: "What is the penalty for violating the RTE provisions?", options: ["Fine up to ₹10,000", "Imprisonment", "School Derecognition"], correct: "School Derecognition" },
    { scenario: "Which commission recommended inclusion of education as a fundamental right?", options: ["Kothari Commission", "Verma Commission", "Malimath Committee"], correct: "Kothari Commission" },
    { scenario: "What does Section 12(1)(c) of the RTE Act deal with?", options: ["25% reservation in private schools", "Mid-day meal scheme", "No detention policy"], correct: "25% reservation in private schools" },
    { scenario: "What is the deadline set in the RTE Act for schools to meet infrastructure norms?", options: ["3 years", "5 years", "10 years"], correct: "3 years" },
    { scenario: "Under RTE, which of the following is NOT mandatory for schools?", options: ["Smart classrooms", "Playground", "Separate toilets for boys and girls"], correct: "Smart classrooms" },
    { scenario: "Which provision prohibits physical punishment in schools?", options: ["Section 17", "Section 12", "Section 5"], correct: "Section 17" },
    { scenario: "Does RTE apply to minority institutions?", options: ["No", "Yes"], correct: "No" },
    { scenario: "What is the role of the School Management Committee (SMC) under RTE?", options: ["Monitor school activities", "Inspect other schools", "Conduct board exams"], correct: "Monitor school activities" },
    { scenario: "Which report played a key role in the formation of RTE?", options: ["Tapas Majumdar Committee Report", "Justice Verma Report", "NITI Aayog Report"], correct: "Tapas Majumdar Committee Report" }
  ]
},
  right_to_property: {
    easy: [
      { scenario: "Under which article was the right to property removed as a fundamental right?", options: ["Article 300A", "Article 19", "Article 14"], correct: "Article 300A" },
      { scenario: "Can a person be deprived of property without legal authority?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Is the right to property a fundamental right now?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Right to property is now a ______ right.", options: ["Legal", "Fundamental", "Moral"], correct: "Legal" },
      { scenario: "Who can enact laws related to land acquisition?", options: ["Parliament and State Legislatures", "Supreme Court", "Municipalities"], correct: "Parliament and State Legislatures" },
      { scenario: "Can the government acquire property for public use?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which law governs land acquisition today?", options: ["Land Acquisition Act, 2013", "Property Rights Act", "Urban Land Act"], correct: "Land Acquisition Act, 2013" },
      { scenario: "Can agricultural land be converted to commercial use without permission?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Does Article 300A guarantee property rights?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Who ensures that land acquisition is lawful?", options: ["Courts", "Police", "Banks"], correct: "Courts" }
    ],
    medium: [
      { scenario: "Which amendment removed the right to property as a fundamental right?", options: ["44th Amendment", "42nd Amendment", "52nd Amendment"], correct: "44th Amendment" },
      { scenario: "Which authority can acquire private property for public purpose?", options: ["State Government", "NGOs", "Courts"], correct: "State Government" },
      { scenario: "In which year was the 44th Amendment passed?", options: ["1978", "1985", "1991"], correct: "1978" },
      { scenario: "What does Article 300A ensure?", options: ["No one shall be deprived of property without authority of law", "Right to free education", "Protection of environment"], correct: "No one shall be deprived of property without authority of law" },
      { scenario: "Is compensation mandatory for land acquisition?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which institution ensures fairness in land acquisition disputes?", options: ["Judiciary", "Police", "Panchayat"], correct: "Judiciary" },
      { scenario: "What is considered a public purpose for land acquisition?", options: ["Infrastructure projects", "Personal business", "Private farming"], correct: "Infrastructure projects" },
      { scenario: "Does Article 300A apply to both citizens and non-citizens?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Who notifies the public about land acquisition?", options: ["District Collector", "NGO", "MLA"], correct: "District Collector" },
      { scenario: "Is prior consent needed before acquiring tribal land?", options: ["Yes", "No"], correct: "Yes" }
    ],
    hard: [
      { scenario: "What is the legal recourse if land is acquired without compensation?", options: ["File PIL in High Court", "Complain to Gram Panchayat", "Report to Police"], correct: "File PIL in High Court" },
      { scenario: "Which case stated that right to property is no longer a fundamental right?", options: ["Kesavananda Bharati v. State of Kerala", "Indira Gandhi v. Raj Narain", "State of W.B. v. Bela Banerjee"], correct: "Kesavananda Bharati v. State of Kerala" },
      { scenario: "Does the government need to follow due process for land acquisition?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Under which schedule is land a state subject?", options: ["Seventh Schedule", "Sixth Schedule", "Ninth Schedule"], correct: "Seventh Schedule" },
      { scenario: "Can a person challenge land acquisition in Supreme Court?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which act governs fair compensation and rehabilitation?", options: ["Right to Fair Compensation and Transparency in Land Acquisition, 2013", "Property Transfer Act", "Urban Planning Act"], correct: "Right to Fair Compensation and Transparency in Land Acquisition, 2013" },
      { scenario: "What is 'eminent domain'?", options: ["Government's power to acquire private property", "Right to own luxury property", "Right to deny land registration"], correct: "Government's power to acquire private property" },
      { scenario: "Which authority resolves disputes related to land acquisition?", options: ["Civil Courts", "Lok Sabha", "Rajya Sabha"], correct: "Civil Courts" },
      { scenario: "Does Article 300A ensure right to own property abroad?", options: ["No", "Yes"], correct: "No" },
      { scenario: "What is the main safeguard under Article 300A?", options: ["Lawful authority is required to take property", "Property must be taxed", "Property must be registered"], correct: "Lawful authority is required to take property" }
    ]
  },  
  legal_aid: {
    easy: [
      { scenario: "Which act provides free legal aid to the needy?", options: ["Legal Services Authorities Act, 1987", "Public Defender Act"], correct: "Legal Services Authorities Act, 1987" },
      { scenario: "Who is eligible for free legal aid?", options: ["Only women", "Only BPL families", "Various vulnerable groups"], correct: "Various vulnerable groups" },
      { scenario: "Is free legal aid available in criminal cases?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is legal aid a fundamental right?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are children eligible for free legal aid?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Do senior citizens get free legal aid?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can women victims of domestic violence avail legal aid?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does legal aid cover court representation?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can SC/ST individuals get free legal aid?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is legal aid available in Lok Adalats?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Which organization provides free legal services at district level?", options: ["DLSA", "UNICEF", "NHRC"], correct: "DLSA" },
      { scenario: "Which article in the Constitution mandates legal aid?", options: ["Article 39A", "Article 21", "Article 32"], correct: "Article 39A" },
      { scenario: "What is the role of the Taluk Legal Services Committee?", options: ["Provides legal aid at village level", "Handles Supreme Court cases", "Provides legal education only"], correct: "Provides legal aid at village level" },
      { scenario: "Can legal aid be denied due to case complexity?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Does NALSA provide legal awareness programs?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is legal aid available for preventive legal advice?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can prisoners avail free legal aid?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Who appoints panel lawyers for legal aid?", options: ["Bar Council", "Legal Services Authorities"], correct: "Legal Services Authorities" },
      { scenario: "Which level of courts can provide legal aid?", options: ["All levels", "Only High Court", "Only Supreme Court"], correct: "All levels" },
      { scenario: "Is income proof required for availing free legal aid?", options: ["Yes, in some cases", "Never", "Always"], correct: "Yes, in some cases" }
    ],
    hard: [
      { scenario: "What is the role of NALSA?", options: ["Policy framing and monitoring", "Only awareness", "Training police"], correct: "Policy framing and monitoring" },
      { scenario: "Which is not a service under legal aid?", options: ["Free representation", "Legal advice", "Medical assistance"], correct: "Medical assistance" },
      { scenario: "Which section of the Legal Services Authorities Act discusses entitlement to legal services?", options: ["Section 12", "Section 8", "Section 9"], correct: "Section 12" },
      { scenario: "When was NALSA established?", options: ["1995", "1987", "2000"], correct: "1995" },
      { scenario: "Under which constitutional directive is free legal aid promoted?", options: ["Directive Principles of State Policy", "Fundamental Duties"], correct: "Directive Principles of State Policy" },
      { scenario: "Which judgment emphasized the importance of free legal aid for a fair trial?", options: ["Hussainara Khatoon v. State of Bihar", "Maneka Gandhi v. Union of India"], correct: "Hussainara Khatoon v. State of Bihar" },
      { scenario: "Which body supervises and funds SLSA and DLSA?", options: ["NALSA", "Ministry of Law", "Bar Council of India"], correct: "NALSA" },
      { scenario: "Does the Legal Services Authorities Act cover ADR mechanisms?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Who heads NALSA?", options: ["Chief Justice of India", "Prime Minister", "President"], correct: "Chief Justice of India" },
      { scenario: "Is legal aid available during arrest and detention?", options: ["Yes", "No"], correct: "Yes" }
    ]
  },  
  rape_laws: {
    easy: [
      { scenario: "Which section of the IPC defines rape?", options: ["Section 375", "Section 376", "Section 370"], correct: "Section 375" },
      { scenario: "Is marital rape criminalized in India?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Does the law consider sexual intercourse without consent as rape?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is rape considered a non-bailable offence?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can a woman file a rape complaint at any police station?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the victim’s character affect a rape trial?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Are boys below 16 considered capable of committing rape under IPC?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Can rape victims get free medical treatment?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is consent given under fear or threat considered valid?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Does Indian law allow video conferencing for victim testimony?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Which section of IPC provides punishment for rape?", options: ["Section 376", "Section 377", "Section 354"], correct: "Section 376" },
      { scenario: "What is the minimum punishment for rape of a minor under 16 years?", options: ["10 years", "20 years", "Life imprisonment"], correct: "20 years" },
      { scenario: "Which law governs the protection of children from sexual offences?", options: ["POCSO Act", "Juvenile Justice Act"], correct: "POCSO Act" },
      { scenario: "What is the punishment for repeat offenders of rape?", options: ["10 years", "20 years", "Life imprisonment or death"], correct: "Life imprisonment or death" },
      { scenario: "Is police delay in filing FIR a valid reason to dismiss rape charges?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Does the 2013 Criminal Law Amendment Act cover stalking?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can a rape case proceed without medical evidence?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which section provides enhanced punishment for rape by public servants?", options: ["Section 376(2)", "Section 376D", "Section 375"], correct: "Section 376(2)" },
      { scenario: "Can a male be a rape victim under IPC?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Is penetration necessary to constitute rape?", options: ["Yes", "No"], correct: "Yes" }
    ],
    hard: [
      { scenario: "Under which Act is the identity of a rape victim protected?", options: ["POCSO Act", "CrPC", "Indian Penal Code"], correct: "CrPC" },
      { scenario: "Which section deals with gang rape?", options: ["Section 376D", "Section 375A", "Section 376B"], correct: "Section 376D" },
      { scenario: "Which section prohibits disclosure of a rape victim’s identity?", options: ["Section 228A IPC", "Section 376A IPC", "Section 160 IPC"], correct: "Section 228A IPC" },
      { scenario: "What is the punishment under Section 376AB for rape of a girl below 12?", options: ["Life imprisonment", "20 years", "Death penalty or life imprisonment"], correct: "Death penalty or life imprisonment" },
      { scenario: "Which section of CrPC mandates in-camera trial for rape?", options: ["Section 327(2)", "Section 161", "Section 154"], correct: "Section 327(2)" },
      { scenario: "Which amendment act expanded the definition of rape in IPC?", options: ["Criminal Law Amendment Act, 2013", "POCSO Act", "IT Act"], correct: "Criminal Law Amendment Act, 2013" },
      { scenario: "Which case declared that the absence of physical injury doesn't disprove rape?", options: ["State of Punjab v. Gurmit Singh", "Vishaka v. State of Rajasthan"], correct: "State of Punjab v. Gurmit Singh" },
      { scenario: "Can the court direct compensation to the rape victim?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does consent obtained under intoxication qualify as valid consent?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Which article ensures the right to live with dignity, relevant in rape cases?", options: ["Article 21", "Article 19", "Article 22"], correct: "Article 21" }
    ]
  },  
  transgender_rights: {
    easy: [
      { scenario: "Which Act provides legal recognition to transgender persons in India?", options: ["Transgender Persons (Protection of Rights) Act, 2019", "LGBTQ+ Rights Act"], correct: "Transgender Persons (Protection of Rights) Act, 2019" },
      { scenario: "Can a transgender person choose their gender identity?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is discrimination against transgender persons in public places prohibited?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can a transgender person apply for a gender certificate?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the 2019 Act protect transgender persons from being denied education?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are employers allowed to discriminate based on gender identity?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Is there a legal recognition of 'Third Gender' in India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can a transgender person file complaints against discrimination?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the law protect transgender persons from forced removal from household?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can transgender persons be admitted to educational institutions?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Which document certifies a person’s transgender identity?", options: ["Transgender Certificate", "Gender Identity Certificate"], correct: "Gender Identity Certificate" },
      { scenario: "Which body is responsible for protecting transgender rights?", options: ["National Council for Transgender Persons", "National Human Rights Commission"], correct: "National Council for Transgender Persons" },
      { scenario: "Who can issue a certificate of identity for transgender persons?", options: ["District Magistrate", "Police Officer"], correct: "District Magistrate" },
      { scenario: "Does the 2019 Act include protection against denial of healthcare?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which Ministry oversees transgender welfare schemes?", options: ["Ministry of Social Justice and Empowerment", "Ministry of Home Affairs"], correct: "Ministry of Social Justice and Empowerment" },
      { scenario: "Is medical or psychological assessment mandatory to get a transgender certificate?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Which form is used to apply for a gender certificate?", options: ["Form-1", "Form-TG"], correct: "Form-1" },
      { scenario: "Is it mandatory to undergo surgery to be legally recognized as transgender?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Which of the following is a welfare measure for transgender persons?", options: ["Garima Greh", "Aasra Yojana"], correct: "Garima Greh" },
      { scenario: "Do transgender persons have reservation under employment schemes?", options: ["Yes", "No"], correct: "Yes" }
    ],
    hard: [
      { scenario: "Under which article is the right to equality ensured for transgender persons?", options: ["Article 14", "Article 15", "Both"], correct: "Both" },
      { scenario: "Which Supreme Court judgment recognized transgender as the 'third gender'?", options: ["NALSA v. Union of India", "Navtej Singh Johar case"], correct: "NALSA v. Union of India" },
      { scenario: "What year was the NALSA judgment delivered?", options: ["2014", "2016", "2019"], correct: "2014" },
      { scenario: "Which article prohibits discrimination on the basis of sex?", options: ["Article 15", "Article 19", "Article 21"], correct: "Article 15" },
      { scenario: "Does Article 21 include the right to gender identity?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What is the main role of the National Council for Transgender Persons?", options: ["Policy review and welfare planning", "Issuing certificates"], correct: "Policy review and welfare planning" },
      { scenario: "Which of the following is NOT a protection under the 2019 Act?", options: ["Right to Marry", "Right to Residence", "Right against Discrimination"], correct: "Right to Marry" },
      { scenario: "What penalty can be imposed for denying transgender persons public services?", options: ["₹10,000 to ₹1 lakh", "₹500 fine", "No penalty"], correct: "₹10,000 to ₹1 lakh" },
      { scenario: "Does the Act provide for setting up of separate HIV surveillance centers?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What does the term 'transgender' NOT include as per the 2019 Act?", options: ["Hijra", "Intersex", "Gay"], correct: "Gay" }
    ]
  },  
  right_to_privacy: {
    easy: [
      { scenario: "Is the Right to Privacy a fundamental right in India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which article ensures the Right to Privacy under the Indian Constitution?", options: ["Article 21", "Article 19", "Article 15"], correct: "Article 21" },
      { scenario: "Does the Right to Privacy include personal data protection?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can your phone be tapped without authorization?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Is your medical information protected under Right to Privacy?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can your browser history be accessed without your consent?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Does privacy include protection of family life?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can someone publicly share your private chats without permission?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Is surveillance without a warrant a violation of privacy?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does privacy include control over one’s image and voice?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Which landmark case declared the Right to Privacy as fundamental?", options: ["Puttaswamy v. Union of India", "Keshavananda Bharati case"], correct: "Puttaswamy v. Union of India" },
      { scenario: "Which right is considered an extension of the Right to Privacy?", options: ["Right to be Forgotten", "Right to Vote"], correct: "Right to be Forgotten" },
      { scenario: "Who delivered the judgment in the Puttaswamy case?", options: ["Justice K.S. Puttaswamy", "Justice D.Y. Chandrachud"], correct: "Justice D.Y. Chandrachud" },
      { scenario: "Right to Privacy is part of which broader right?", options: ["Right to Life and Liberty", "Right to Equality"], correct: "Right to Life and Liberty" },
      { scenario: "Which government ID raised concerns over privacy in India?", options: ["PAN Card", "Aadhaar"], correct: "Aadhaar" },
      { scenario: "Which authority is responsible for ensuring data privacy?", options: ["UIDAI", "Data Protection Authority"], correct: "Data Protection Authority" },
      { scenario: "Can biometric data be collected without consent?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Which year was the Puttaswamy judgment delivered?", options: ["2017", "2014", "2019"], correct: "2017" },
      { scenario: "Which ministry is responsible for digital privacy rules?", options: ["Ministry of Electronics and IT", "Ministry of Law and Justice"], correct: "Ministry of Electronics and IT" },
      { scenario: "Under which act is online data sharing regulated?", options: ["IT Act, 2000", "Consumer Protection Act"], correct: "IT Act, 2000" }
    ],
    hard: [
      { scenario: "Under which law can a citizen access information about how their data is used?", options: ["Right to Information Act", "Data Protection Act"], correct: "Data Protection Act" },
      { scenario: "Which of these is NOT protected under the Right to Privacy?", options: ["Medical records", "CCTV footage", "Freedom of press"], correct: "Freedom of press" },
      { scenario: "What is the penalty under the DPDP Act for data misuse?", options: ["₹50 lakh", "Up to ₹250 crore", "₹1 crore"], correct: "Up to ₹250 crore" },
      { scenario: "Which authority was proposed under the DPDP Act?", options: ["Data Protection Board", "Privacy Commission"], correct: "Data Protection Board" },
      { scenario: "Which international law influences Indian data privacy laws?", options: ["GDPR", "HIPAA", "DMCA"], correct: "GDPR" },
      { scenario: "What is the main principle behind privacy laws?", options: ["Consent and Transparency", "Surveillance", "Advertising"], correct: "Consent and Transparency" },
      { scenario: "What does 'Data Minimization' mean in privacy laws?", options: ["Collecting all data", "Collecting only necessary data"], correct: "Collecting only necessary data" },
      { scenario: "What does the Right to be Forgotten allow?", options: ["Delete personal data online", "Change name legally"], correct: "Delete personal data online" },
      { scenario: "Which sector faces strict rules under data protection laws?", options: ["Banking and Healthcare", "Hospitality"], correct: "Banking and Healthcare" },
      { scenario: "What is a Data Fiduciary under privacy law?", options: ["Entity handling personal data", "Person losing data"], correct: "Entity handling personal data" }
    ]
  },  
  child_labour: {
    easy: [
      { scenario: "At what age is it illegal to employ a child in India?", options: ["14 years", "16 years", "18 years"], correct: "14 years" },
      { scenario: "Which Act prohibits child labour in India?", options: ["Child Labour (Prohibition and Regulation) Act", "Child Rights Act"], correct: "Child Labour (Prohibition and Regulation) Act" },
      { scenario: "Is child labour illegal in India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can children below 14 work in hazardous jobs?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Is education a fundamental right for children?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is it legal to force a child to work in a factory?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Does child labour affect a child’s health?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is domestic work by children under 14 allowed?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Can children below 14 work as street vendors?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Should children be in school instead of working?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Is employing children below 14 in a family business legal?", options: ["Yes", "No", "Only after school hours"], correct: "Only after school hours" },
      { scenario: "Which organization monitors child labour globally?", options: ["ILO", "WHO", "UNESCO"], correct: "ILO" },
      { scenario: "Is child labour permitted in entertainment industry?", options: ["Only with conditions", "Yes", "No"], correct: "Only with conditions" },
      { scenario: "What is the minimum age to work in non-hazardous work under supervision?", options: ["15 years", "16 years", "14 years"], correct: "15 years" },
      { scenario: "What is the role of the National Child Labour Project?", options: ["Rehabilitation of child workers", "School inspections", "Job placements"], correct: "Rehabilitation of child workers" },
      { scenario: "Can adolescents aged 14–18 work in hazardous occupations?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Are there penalties for parents who force their children into labour?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which Indian ministry deals with child labour issues?", options: ["Ministry of Labour and Employment", "Ministry of Education", "Ministry of Child Development"], correct: "Ministry of Labour and Employment" },
      { scenario: "Does the law allow part-time jobs for school-going children?", options: ["Only in family work after school", "Yes, anytime", "No"], correct: "Only in family work after school" },
      { scenario: "Are child labour laws applicable to informal sectors?", options: ["Yes", "No"], correct: "Yes" }
    ],
    hard: [
      { scenario: "Which Article of the Constitution prohibits child labour?", options: ["Article 23", "Article 24", "Article 21A"], correct: "Article 24" },
      { scenario: "What is the punishment for employing a child illegally in India?", options: ["Fine only", "Up to 2 years imprisonment", "Warning"], correct: "Up to 2 years imprisonment" },
      { scenario: "What is the fine for employing a child in violation of the Act?", options: ["₹10,000", "₹20,000–₹50,000", "₹1 lakh"], correct: "₹20,000–₹50,000" },
      { scenario: "Which Schedule of the Act lists hazardous occupations?", options: ["Schedule A", "Schedule II", "Schedule I"], correct: "Schedule I" },
      { scenario: "In which year was the Child Labour Act amended to ban all work for children below 14?", options: ["2016", "2009", "2013"], correct: "2016" },
      { scenario: "Which Indian government program rescues and rehabilitates child workers?", options: ["National Child Labour Project (NCLP)", "Midday Meal Scheme", "Sarva Shiksha Abhiyan"], correct: "National Child Labour Project (NCLP)" },
      { scenario: "Is the use of children in begging considered child labour?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What is the punishment for repeat offenders of child labour laws?", options: ["3 months jail", "Up to 3 years imprisonment", "Only a warning"], correct: "Up to 3 years imprisonment" },
      { scenario: "Which international convention guides child labour laws in India?", options: ["ILO Convention No. 138 and 182", "UNICEF Protocol", "UN Convention on Child Rights"], correct: "ILO Convention No. 138 and 182" },
      { scenario: "Which constitutional provision ensures free education for children?", options: ["Article 21A", "Article 14", "Article 39"], correct: "Article 21A" }
    ]
  },  
  mental_health_rights: {
    easy: [
      { scenario: "Which Act ensures the rights of persons with mental illness in India?", options: ["Mental Healthcare Act, 2017", "Psychiatric Support Act"], correct: "Mental Healthcare Act, 2017" },
      { scenario: "Does the law allow a person with mental illness to make treatment decisions?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does everyone have the right to access mental healthcare?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is it legal to discriminate against someone with mental illness?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Does the law ensure free mental healthcare for people below the poverty line?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are mental health services available in government hospitals?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can a person with mental illness live in a community setting?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can a person nominate someone to make decisions on their behalf?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is confidentiality of mental health records protected under the Act?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the Act promote awareness about mental health?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "What is an Advance Directive under the Mental Healthcare Act?", options: ["A prescription", "A will", "A document stating preferred treatment options"], correct: "A document stating preferred treatment options" },
      { scenario: "Which Article of the Indian Constitution is invoked for mental health rights?", options: ["Article 21", "Article 15", "Article 25"], correct: "Article 21" },
      { scenario: "Who can create an Advance Directive?", options: ["Any adult person", "Only doctors", "Only lawyers"], correct: "Any adult person" },
      { scenario: "Who has the authority to review and approve Advance Directives?", options: ["Mental Health Review Board", "Police", "Medical Council"], correct: "Mental Health Review Board" },
      { scenario: "What is the role of a Nominated Representative?", options: ["Make treatment decisions for a patient", "Act as a lawyer", "Prescribe medication"], correct: "Make treatment decisions for a patient" },
      { scenario: "Does the Act include provisions for suicide prevention?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can a person be admitted for mental health treatment without consent?", options: ["Yes, under specific conditions", "No"], correct: "Yes, under specific conditions" },
      { scenario: "What does the Act say about insurance for mental illness?", options: ["Mental illness must be covered", "It is optional", "It is not allowed"], correct: "Mental illness must be covered" },
      { scenario: "Is informed consent required before starting treatment?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which type of admission requires the person's consent?", options: ["Independent admission", "Supported admission", "Involuntary admission"], correct: "Independent admission" }
    ],
    hard: [
      { scenario: "Which body is responsible for protecting mental health rights in India?", options: ["State Mental Health Authority", "Medical Council", "NHRC"], correct: "State Mental Health Authority" },
      { scenario: "Is electroconvulsive therapy (ECT) allowed without anesthesia?", options: ["Yes", "No"], correct: "No" },
      { scenario: "Can ECT be given to minors?", options: ["Only with guardian and board approval", "Yes, anytime", "No"], correct: "Only with guardian and board approval" },
      { scenario: "What is the Mental Health Review Board?", options: ["A body to monitor mental health rights", "A board of psychiatrists only", "An insurance panel"], correct: "A body to monitor mental health rights" },
      { scenario: "Which section of the Act decriminalizes suicide attempts?", options: ["Section 115", "Section 21", "Section 42"], correct: "Section 115" },
      { scenario: "What is the role of the Central Mental Health Authority?", options: ["Policy making and oversight", "Hospital management", "Counseling patients"], correct: "Policy making and oversight" },
      { scenario: "Under what condition can a person be admitted without their consent?", options: ["If they pose harm to self or others", "If they skip medicine", "If they are unemployed"], correct: "If they pose harm to self or others" },
      { scenario: "Does the Act ensure mental health care for homeless people?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What is supported admission?", options: ["Admission with help of a representative", "Admission in groups", "Admission under punishment"], correct: "Admission with help of a representative" },
      { scenario: "Can a person challenge their admission in a mental health facility?", options: ["Yes", "No"], correct: "Yes" }
    ]
  },
  juvenile_justice: {
    easy: [
      { scenario: "Who is considered a juvenile under Indian law?", options: ["Below 18 years", "Below 16 years", "Below 21 years"], correct: "Below 18 years" },
      { scenario: "What does the Juvenile Justice Act deal with?", options: ["Crime by minors", "Child marriage", "School dropouts"], correct: "Crime by minors" },
      { scenario: "Is the Juvenile Justice Act applicable all over India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are juveniles kept in jail with adults?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Are children in need of care and protection also covered under JJ Act?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the JJ Act apply to both boys and girls?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are juveniles eligible for legal aid?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can juveniles be sent to rehabilitation homes?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the Act allow adoption of orphaned children?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is the term 'juvenile' and 'child' used interchangeably in the Act?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Can juveniles be tried as adults in serious crimes?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "When was the Juvenile Justice (Care and Protection of Children) Act last amended?", options: ["2015", "2017", "2020"], correct: "2015" },
      { scenario: "What is the maximum period a juvenile can be sent to a rehabilitation center?", options: ["3 years", "5 years", "10 years"], correct: "3 years" },
      { scenario: "What is the name of the institution where juveniles are sent for reform?", options: ["Observation Home", "Central Jail", "Juvenile Court"], correct: "Observation Home" },
      { scenario: "Which ministry oversees implementation of the JJ Act?", options: ["Ministry of Women and Child Development", "Ministry of Home Affairs", "Ministry of Law"], correct: "Ministry of Women and Child Development" },
      { scenario: "What is the age group classified as children in conflict with law?", options: ["16-18 years", "12-18 years", "0-18 years"], correct: "0-18 years" },
      { scenario: "Which authority determines if a juvenile can be tried as an adult?", options: ["Juvenile Justice Board", "High Court", "District Magistrate"], correct: "Juvenile Justice Board" },
      { scenario: "What does 'children in need of care and protection' mean?", options: ["Children abandoned or abused", "Children in school", "Children from rich families"], correct: "Children abandoned or abused" },
      { scenario: "What is the role of Child Welfare Committee?", options: ["Protect and place children in need of care", "Arrest children", "Conduct exams"], correct: "Protect and place children in need of care" },
      { scenario: "Is rehabilitation preferred over punishment in juvenile cases?", options: ["Yes", "No"], correct: "Yes" }
    ],
    hard: [
      { scenario: "Which body handles juvenile offenders?", options: ["Juvenile Justice Board", "Family Court", "High Court"], correct: "Juvenile Justice Board" },
      { scenario: "What is the main objective of the Juvenile Justice system?", options: ["Punishment", "Reform and rehabilitation", "Trial"], correct: "Reform and rehabilitation" },
      { scenario: "Which section of the JJ Act deals with heinous offences by children?", options: ["Section 15", "Section 18", "Section 25"], correct: "Section 15" },
      { scenario: "Can a child below 16 be tried as an adult under any circumstance?", options: ["No", "Yes"], correct: "No" },
      { scenario: "What is the composition of the Juvenile Justice Board?", options: ["1 Magistrate + 2 social workers", "2 Judges", "3 Police Officers"], correct: "1 Magistrate + 2 social workers" },
      { scenario: "What is the purpose of a Social Investigation Report?", options: ["Understand the child’s background", "Determine IQ", "Medical test"], correct: "Understand the child’s background" },
      { scenario: "Which authority is responsible for adoption under JJ Act?", options: ["Central Adoption Resource Authority", "High Court", "Police"], correct: "Central Adoption Resource Authority" },
      { scenario: "What is the role of Special Juvenile Police Units?", options: ["Handle cases involving children", "Manage traffic", "File FIRs"], correct: "Handle cases involving children" },
      { scenario: "Which international convention influences the JJ Act?", options: ["UN Convention on the Rights of the Child", "Geneva Convention", "Hague Convention"], correct: "UN Convention on the Rights of the Child" },
      { scenario: "What is the maximum punishment for a juvenile tried as an adult?", options: ["Detention till 21 years", "Life imprisonment", "Death penalty"], correct: "Detention till 21 years" }
    ]
  },
  rights_of_persons_with_disabilities: {
    easy: [
      { scenario: "Which Act protects the rights of disabled persons in India?", options: ["RPwD Act, 2016", "Equal Rights Act"], correct: "RPwD Act, 2016" },
      { scenario: "Is reservation in government jobs available for persons with disabilities?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the law provide education rights to children with disabilities?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can persons with disabilities vote in elections?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is accessibility in public places a right under RPwD Act?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are children with disabilities allowed to study in regular schools?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is free healthcare a right for persons with disabilities?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the Act promote equal opportunity in employment?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can persons with disabilities access public transport?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is mental illness included under disabilities in the RPwD Act?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "What percentage of reservation is provided for persons with benchmark disabilities in jobs?", options: ["3%", "4%", "5%"], correct: "4%" },
      { scenario: "Which body monitors implementation of disability laws?", options: ["Chief Commissioner for Persons with Disabilities", "Disability Board of India"], correct: "Chief Commissioner for Persons with Disabilities" },
      { scenario: "What is the minimum percentage of disability to be considered a benchmark disability?", options: ["30%", "40%", "50%"], correct: "40%" },
      { scenario: "Under which ministry does the Department of Empowerment of Persons with Disabilities work?", options: ["Ministry of Social Justice and Empowerment", "Ministry of Health", "Ministry of Education"], correct: "Ministry of Social Justice and Empowerment" },
      { scenario: "Does the RPwD Act cover both physical and mental disabilities?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which commission ensures that educational institutions are inclusive?", options: ["University Grants Commission", "National Commission for Persons with Disabilities", "Ministry of Education"], correct: "University Grants Commission" },
      { scenario: "What is the role of a District Disability Rehabilitation Centre?", options: ["Providing support and services to disabled persons", "Issuing ration cards", "Conducting exams"], correct: "Providing support and services to disabled persons" },
      { scenario: "Can private companies be required to hire persons with disabilities?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which document certifies a person as disabled?", options: ["Disability certificate", "Aadhaar card", "PAN card"], correct: "Disability certificate" },
      { scenario: "Are reasonable accommodations mandatory for employers?", options: ["Yes", "No"], correct: "Yes" }
    ],
    hard: [
      { scenario: "How many types of disabilities are recognized under the RPwD Act?", options: ["10", "21", "25"], correct: "21" },
      { scenario: "Which Article of the Constitution ensures equality before the law for all including disabled persons?", options: ["Article 14", "Article 16", "Article 25"], correct: "Article 14" },
      { scenario: "Which Article ensures the right to non-discrimination in public employment?", options: ["Article 16", "Article 21", "Article 19"], correct: "Article 16" },
      { scenario: "Which section of the RPwD Act mandates access to public buildings?", options: ["Section 45", "Section 42", "Section 50"], correct: "Section 45" },
      { scenario: "Which national institute conducts disability research and training?", options: ["NIEPMD", "NISD", "NIOS"], correct: "NIEPMD" },
      { scenario: "Are private educational institutions bound to follow accessibility norms under RPwD?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is discrimination against persons with disabilities punishable by law?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What is the penalty for failing to make buildings accessible?", options: ["Fine up to ₹10,000", "Fine up to ₹1 lakh", "Fine up to ₹50,000"], correct: "Fine up to ₹1 lakh" },
      { scenario: "Can a person with disability be denied a promotion solely based on disability?", options: ["No", "Yes"], correct: "No" },
      { scenario: "Who has the authority to appoint Commissioners for Persons with Disabilities?", options: ["Central/State Government", "Supreme Court", "NGOs"], correct: "Central/State Government" }
    ]
  },  
  pocso_act: {
    easy: [
      { scenario: "What does POCSO stand for?", options: ["Protection of Children from Sexual Offences", "Protection of Civilians from Sexual Offences"], correct: "Protection of Children from Sexual Offences" },
      { scenario: "At what age is a person considered a child under the POCSO Act?", options: ["16", "18", "21"], correct: "18" },
      { scenario: "Is the POCSO Act applicable in all parts of India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is sexual harassment of a child an offence under POCSO?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the POCSO Act aim to protect children from sexual abuse?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can a minor be both a victim and a witness in a POCSO case?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are schools responsible for reporting suspected POCSO cases?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can girls and boys both be victims under POCSO?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is touching a child inappropriately a POCSO offence?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can anyone report a POCSO case?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Does the POCSO Act apply to both boys and girls?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is reporting a POCSO offence mandatory?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Who is considered a child under POCSO?", options: ["Anyone below 18", "Anyone below 21", "Anyone below 16"], correct: "Anyone below 18" },
      { scenario: "What is the role of a Child Welfare Committee in POCSO cases?", options: ["Provide support and rehabilitation", "Provide legal defense", "Monitor schools"], correct: "Provide support and rehabilitation" },
      { scenario: "What is the time frame to complete the trial under POCSO?", options: ["Within 1 year", "Within 3 years", "No time limit"], correct: "Within 1 year" },
      { scenario: "Are medical examinations required in POCSO cases?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can statements of child victims be recorded at home under POCSO?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Who can file a complaint under the POCSO Act?", options: ["Anyone", "Only the victim", "Only family"], correct: "Anyone" },
      { scenario: "Are police officers trained for handling POCSO cases?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does the Act prohibit media from revealing child identities?", options: ["Yes", "No"], correct: "Yes" }
    ],
    hard: [
      { scenario: "What is the minimum punishment for aggravated penetrative sexual assault under POCSO?", options: ["7 years", "10 years", "Rigorous imprisonment for life"], correct: "10 years" },
      { scenario: "What type of court hears POCSO cases?", options: ["Family Court", "POCSO Special Court", "Children’s Tribunal"], correct: "POCSO Special Court" },
      { scenario: "Under which section is 'aggravated sexual assault' defined?", options: ["Section 5", "Section 3", "Section 7"], correct: "Section 5" },
      { scenario: "What does 'abetment of an offence' under POCSO mean?", options: ["Helping someone commit the crime", "Helping victim", "Reporting to police"], correct: "Helping someone commit the crime" },
      { scenario: "Is there any punishment for failing to report a POCSO offence?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which section deals with punishment for false complaints under POCSO?", options: ["Section 22", "Section 10", "Section 19"], correct: "Section 22" },
      { scenario: "Are trials under POCSO supposed to be conducted in-camera?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What is the punishment for using a child for pornographic purposes?", options: ["5 years", "7 years", "Up to 5 years with fine"], correct: "Up to 5 years with fine" },
      { scenario: "Is it mandatory for police to record the child's statement at their residence or a place of choice?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can a child’s testimony alone lead to conviction under POCSO?", options: ["Yes", "No"], correct: "Yes" }
    ]
  },
  right_to_clean_environment: {
    easy: [
      { scenario: "Which Article ensures the right to a clean environment?", options: ["Article 21", "Article 15", "Article 19"], correct: "Article 21" },
      { scenario: "Is the right to clean air a fundamental right in India?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does pollution affect the quality of life?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can people complain about garbage dumping in residential areas?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is noise pollution harmful to health?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is waste segregation at home important for a clean environment?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are trees important for maintaining a clean environment?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Does clean drinking water fall under the right to life?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can burning plastic affect the environment?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are industries required to treat waste before disposing it?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Which organization monitors air and water quality in India?", options: ["Central Pollution Control Board", "NITI Aayog", "IMD"], correct: "Central Pollution Control Board" },
      { scenario: "Which case recognized environmental protection as part of the right to life?", options: ["MC Mehta v. Union of India", "Kesavananda Bharati case", "Minerva Mills case"], correct: "MC Mehta v. Union of India" },
      { scenario: "What is the role of the National Green Tribunal (NGT)?", options: ["Solve civil disputes", "Handle environmental cases", "Manage agriculture"], correct: "Handle environmental cases" },
      { scenario: "Which ministry handles environmental issues in India?", options: ["Ministry of Environment, Forest and Climate Change", "Ministry of Water Resources", "Ministry of Agriculture"], correct: "Ministry of Environment, Forest and Climate Change" },
      { scenario: "Which act provides for control of air pollution?", options: ["Air (Prevention and Control of Pollution) Act, 1981", "Water Act, 1974", "Environment Act, 1986"], correct: "Air (Prevention and Control of Pollution) Act, 1981" },
      { scenario: "Which body prepares India’s Environment Status Report?", options: ["CPCB", "MoEFCC", "NITI Aayog"], correct: "MoEFCC" },
      { scenario: "What is a major cause of urban air pollution?", options: ["Vehicle emissions", "Tree plantation", "Rainfall"], correct: "Vehicle emissions" },
      { scenario: "What does sustainable development mean?", options: ["Development without harming environment", "Fast economic growth", "Only building roads"], correct: "Development without harming environment" },
      { scenario: "Which gas is majorly responsible for global warming?", options: ["Carbon dioxide", "Oxygen", "Nitrogen"], correct: "Carbon dioxide" },
      { scenario: "Is noise pollution covered under environmental law?", options: ["Yes", "No"], correct: "Yes" }
    ],
    hard: [
      { scenario: "Which Act provides for the prevention and control of water pollution?", options: ["Water (Prevention and Control of Pollution) Act, 1974", "Environment Act"], correct: "Water (Prevention and Control of Pollution) Act, 1974" },
      { scenario: "Who can file a PIL regarding environmental degradation?", options: ["Any citizen", "Only government officials", "Only NGOs"], correct: "Any citizen" },
      { scenario: "Which Article imposes a duty on every citizen to protect the environment?", options: ["Article 51A(g)", "Article 14", "Article 19"], correct: "Article 51A(g)" },
      { scenario: "What does the Environment (Protection) Act, 1986 empower the government to do?", options: ["Take measures to protect environment", "Conduct elections", "Create courts"], correct: "Take measures to protect environment" },
      { scenario: "Which landmark judgment banned the use of loudspeakers at night?", options: ["In Re: Noise Pollution case", "MC Mehta case", "Olga Tellis case"], correct: "In Re: Noise Pollution case" },
      { scenario: "What is the purpose of Environmental Impact Assessment (EIA)?", options: ["Assess effects of a project on environment", "Study air pressure", "Make economic plans"], correct: "Assess effects of a project on environment" },
      { scenario: "Is industrial waste disposal into rivers without treatment punishable?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which act regulates hazardous waste management?", options: ["Environment (Protection) Act, 1986", "Air Act, 1981", "Forest Act"], correct: "Environment (Protection) Act, 1986" },
      { scenario: "Which Indian court created the 'Polluter Pays Principle'?", options: ["Supreme Court", "High Court", "District Court"], correct: "Supreme Court" },
      { scenario: "What is the aim of Swachh Bharat Abhiyan?", options: ["Clean India mission", "Build factories", "Increase petrol use"], correct: "Clean India mission" }
    ]
  },
  cyber_crime_against_women: {
    easy: [
      { scenario: "Is online stalking a punishable offence under Indian law?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What section of the IT Act covers cyber pornography?", options: ["Section 66A", "Section 67", "Section 72"], correct: "Section 67" },
      { scenario: "Can a woman report cyber harassment anonymously?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is creating fake profiles of women online a cybercrime?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Are women protected by Indian law against cyber defamation?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can cyberstalking include repeated messaging on social media?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can sharing private pictures of a woman without consent be a cybercrime?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is sending obscene content online to a woman punishable?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is there a special cyber cell to handle online crimes?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Can threatening someone online be a criminal offence?", options: ["Yes", "No"], correct: "Yes" }
    ],
    medium: [
      { scenario: "Which IPC section deals with online stalking?", options: ["Section 354D", "Section 375", "Section 509"], correct: "Section 354D" },
      { scenario: "What is the first step to take in case of cyberbullying?", options: ["Ignore it", "File a complaint with Cyber Cell", "Tell friends"], correct: "File a complaint with Cyber Cell" },
      { scenario: "Which IT Act section deals with identity theft?", options: ["Section 66C", "Section 67", "Section 72"], correct: "Section 66C" },
      { scenario: "What is the punishment for cyberstalking under IPC 354D?", options: ["Up to 1 year", "Up to 3 years", "Up to 5 years"], correct: "Up to 3 years" },
      { scenario: "Which law applies if someone uses a woman’s pictures without permission?", options: ["IT Act Section 66E", "IPC Section 376", "Section 509"], correct: "IT Act Section 66E" },
      { scenario: "Can screenshots of messages be used as evidence in cybercrime cases?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Where can a woman file a cybercrime complaint?", options: ["Cyber Crime Portal", "Police Station", "Both"], correct: "Both" },
      { scenario: "What does cyber defamation involve?", options: ["Spreading false information online", "Physical abuse", "Robbery"], correct: "Spreading false information online" },
      { scenario: "Which government portal is used to report cybercrime?", options: ["cybercrime.gov.in", "digitallaw.gov.in", "mha.gov.in"], correct: "cybercrime.gov.in" },
      { scenario: "Which section of IPC covers outraging modesty through online messages?", options: ["Section 509", "Section 500", "Section 354"], correct: "Section 509" }
    ],
    hard: [
      { scenario: "Which Indian law punishes morphing or publishing obscene photos of women?", options: ["IT Act Section 67A", "IPC Section 375", "CrPC Section 161"], correct: "IT Act Section 67A" },
      { scenario: "Can women file cybercrime complaints online?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Which section of IT Act deals with violation of privacy?", options: ["Section 66E", "Section 67", "Section 72"], correct: "Section 66E" },
      { scenario: "Is doxing (leaking private info) punishable under Indian law?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What does Section 67A of IT Act specifically prohibit?", options: ["Transmission of sexually explicit material", "Identity theft", "Financial fraud"], correct: "Transmission of sexually explicit material" },
      { scenario: "Under which section is sending sexually explicit messages punishable?", options: ["Section 67A", "Section 354D", "Section 509"], correct: "Section 67A" },
      { scenario: "What is the punishment for identity theft under IT Act?", options: ["Up to 1 year", "Up to 3 years and fine", "Only fine"], correct: "Up to 3 years and fine" },
      { scenario: "Can cybercrime be reported at any police station?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "Is creating revenge porn a punishable offence?", options: ["Yes", "No"], correct: "Yes" },
      { scenario: "What law covers cyber intimidation or threats?", options: ["IT Act Section 66A", "IPC Section 503", "Both"], correct: "Both" }
    ]
  },
  child_abuse: {
    easy: [
      {scenario: "At what age is a child considered to be under the protection of child abuse laws?", options: ["Below 16 years", "Below 18 years", "Below 21 years"], correct: "Below 18 years"},
      {scenario: "Which of the following is a form of child abuse?", options: ["Physical harm", "Emotional harm", "Both"], correct: "Both"},
      {scenario: "Which act provides protection to children from abuse in India?", options: ["The Protection of Children from Sexual Offences Act, 2012", "The Juvenile Justice Act, 2015"], correct: "The Protection of Children from Sexual Offences Act, 2012"},
      {scenario: "Who can report suspected child abuse in India?", options: ["Only parents", "Any citizen", "Only teachers"], correct: "Any citizen"},
      {scenario: "Is child abuse limited to physical harm?", options: ["Yes", "No"], correct: "No"},
      {scenario: "Which form of abuse is often difficult to detect in children?", options: ["Physical abuse", "Sexual abuse", "Emotional abuse"], correct: "Emotional abuse"},
      {scenario: "Can a child file a complaint of abuse?", options: ["Yes", "No"], correct: "Yes"},
      {scenario: "What is the punishment for child abuse under Indian law?", options: ["Imprisonment up to 2 years", "Imprisonment up to 7 years", "Life imprisonment"], correct: "Imprisonment up to 7 years"},
      {scenario: "What should you do if you suspect a child is being abused?", options: ["Ignore it", "Report it to the authorities", "Talk to the child’s parents"], correct: "Report it to the authorities"},
      {scenario: "Is verbal abuse considered child abuse?", options: ["Yes", "No"], correct: "Yes"}
    ],
    
    medium: [
      {scenario: "What is the minimum age of consent under Indian law to avoid being considered child sexual abuse?", options: ["14 years", "16 years", "18 years"], correct: "18 years"},
      {scenario: "Under which act can a child be rescued from abusive conditions in India?", options: ["Juvenile Justice Act", "Protection of Children from Sexual Offences Act", "Both"], correct: "Both"},
      {scenario: "What is the role of child protection committees in India?", options: ["Monitoring child abuse cases", "Providing medical care", "Both"], correct: "Both"},
      {scenario: "Which organization can assist children who are victims of abuse?", options: ["National Commission for Protection of Child Rights", "UNICEF", "Both"], correct: "Both"},
      {scenario: "What is the main goal of the Juvenile Justice Act in cases of child abuse?", options: ["To protect children from abuse", "To punish abusers", "Both"], correct: "Both"},
      {scenario: "What does ‘neglect’ refer to in child abuse cases?", options: ["Failure to provide basic needs", "Physical harm", "Psychological manipulation"], correct: "Failure to provide basic needs"},
      {scenario: "Can abuse by a stranger be classified as child abuse?", options: ["Yes", "No"], correct: "Yes"},
      {scenario: "Which age group is most vulnerable to abuse in India?", options: ["Below 6 years", "6-12 years", "12-18 years"], correct: "Below 6 years"},
      {scenario: "Can child abuse occur in institutions like schools or orphanages?", options: ["Yes", "No"], correct: "Yes"},
      {scenario: "What should be done if a child confides in you about abuse?", options: ["Promise to keep it a secret", "Report it to the authorities immediately", "Tell the child’s parents"], correct: "Report it to the authorities immediately"}
    ],
    
    hard: [
      {scenario: "Under the Protection of Children from Sexual Offences Act, what is the punishment for sexual abuse of a child?", options: ["Up to 5 years", "Up to 7 years", "Up to 10 years"], correct: "Up to 10 years"},
      {scenario: "Which international treaty addresses child abuse?", options: ["UNCRC", "CEDAW", "CRC"], correct: "UNCRC"},
      {scenario: "What is the role of the National Commission for Protection of Child Rights (NCPCR) in child abuse cases?", options: ["Monitoring and protecting child rights", "Providing legal aid to victims", "Both"], correct: "Both"},
      {scenario: "Can a child abuse case be filed against a parent under Indian law?", options: ["Yes", "No"], correct: "Yes"},
      {scenario: "What is the penalty for child sexual abuse under Section 4 of the Protection of Children from Sexual Offences Act?", options: ["Imprisonment up to 3 years", "Imprisonment up to 7 years", "Imprisonment up to life"], correct: "Imprisonment up to life"},
      {scenario: "What is the role of child abuse prevention programs?", options: ["Raising awareness", "Providing shelter to victims", "Both"], correct: "Both"},
      {scenario: "How are child sexual abuse cases handled in court?", options: ["In a juvenile court", "In a regular criminal court", "In a family court"], correct: "In a juvenile court"},
      {scenario: "What is the role of social workers in child abuse cases?", options: ["Provide emotional support", "Help in case investigations", "Both"], correct: "Both"},
      {scenario: "What kind of punishment can a person face for human trafficking related to child abuse?", options: ["Imprisonment up to 5 years", "Imprisonment up to life", "Death sentence"], correct: "Imprisonment up to life"},
      {scenario: "What is the time limit to report child abuse cases to authorities?", options: ["No time limit", "Within 1 month", "Within 6 months"], correct: "No time limit"}
    ]
  },
  
trafficking_of_children: {
  easy: [
    { scenario: "What is the legal age for a child in India?", options: ["Below 18 years", "Below 21 years", "Below 16 years"], correct: "Below 18 years" },
    { scenario: "Which act governs child trafficking in India?", options: ["Juvenile Justice Act", "Immoral Traffic (Prevention) Act", "Child Trafficking Prevention Act"], correct: "Immoral Traffic (Prevention) Act" },
    { scenario: "Which organization primarily works to prevent child trafficking in India?", options: ["UNICEF", "NCPCR", "Childline India Foundation"], correct: "Childline India Foundation" },
    { scenario: "What is the penalty for trafficking a child in India?", options: ["Up to 7 years imprisonment", "Up to 10 years imprisonment", "Up to 3 years imprisonment"], correct: "Up to 7 years imprisonment" },
    { scenario: "Can children be trafficked for labor purposes?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the role of the National Commission for Protection of Child Rights (NCPCR) in child trafficking cases?", options: ["Monitoring child trafficking", "Providing legal aid", "Both"], correct: "Both" },
    { scenario: "What is the primary cause of child trafficking in India?", options: ["Poverty", "Lack of education", "Both"], correct: "Both" },
    { scenario: "Which agency in India coordinates child protection and anti-trafficking efforts?", options: ["NCPCR", "Central Bureau of Investigation (CBI)", "National Anti-Trafficking Bureau"], correct: "National Anti-Trafficking Bureau" },
    { scenario: "What does the Immoral Traffic (Prevention) Act focus on?", options: ["Preventing child trafficking", "Preventing prostitution", "Both"], correct: "Both" },
    { scenario: "Can a trafficked child be rescued under the law?", options: ["Yes", "No"], correct: "Yes" }
  ],
  medium: [
    { scenario: "What is the main aim of the Juvenile Justice Act regarding child trafficking?", options: ["Rehabilitation", "Punishment", "Both"], correct: "Rehabilitation" },
    { scenario: "Which country is India primarily working with to prevent child trafficking?", options: ["Nepal", "Bangladesh", "Sri Lanka"], correct: "Bangladesh" },
    { scenario: "What is the penalty for engaging in child trafficking for sexual exploitation?", options: ["Imprisonment up to 5 years", "Imprisonment up to 10 years", "Life imprisonment"], correct: "Imprisonment up to 10 years" },
    { scenario: "What is the role of NGOs in preventing child trafficking?", options: ["Provide shelter", "Raise awareness", "Both"], correct: "Both" },
    { scenario: "Which law was enacted to specifically combat human trafficking, including trafficking of children?", options: ["Immoral Traffic (Prevention) Act", "Protection of Children from Sexual Offences Act", "Anti-Trafficking Act"], correct: "Immoral Traffic (Prevention) Act" },
    { scenario: "Which international convention seeks to protect children from trafficking?", options: ["The United Nations Convention on the Rights of the Child (CRC)", "The Geneva Convention", "The International Labour Organization Convention No. 182"], correct: "The United Nations Convention on the Rights of the Child (CRC)" },
    { scenario: "What is the focus of the National Action Plan against Human Trafficking in India?", options: ["Prevention", "Rescue and Rehabilitation", "Both"], correct: "Both" },
    { scenario: "What is a common form of child trafficking in India?", options: ["Child labor", "Sexual exploitation", "Both"], correct: "Both" },
    { scenario: "Can trafficked children be provided legal aid in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which body ensures the implementation of anti-trafficking laws in India?", options: ["Central Bureau of Investigation (CBI)", "Ministry of Women and Child Development", "National Crime Records Bureau (NCRB)"], correct: "Ministry of Women and Child Development" }
  ],
  hard: [
    { scenario: "Which section of the Immoral Traffic (Prevention) Act deals with trafficking for sexual exploitation?", options: ["Section 5", "Section 12", "Section 18"], correct: "Section 5" },
    { scenario: "Which international organization assists in the fight against child trafficking?", options: ["INTERPOL", "UNICEF", "World Health Organization"], correct: "INTERPOL" },
    { scenario: "Which law addresses trafficking for forced labor and sexual exploitation of children in India?", options: ["The Child Labour (Prohibition and Regulation) Act", "The Immoral Traffic (Prevention) Act", "The Protection of Children from Sexual Offences Act"], correct: "The Immoral Traffic (Prevention) Act" },
    { scenario: "What is the primary cause of cross-border child trafficking?", options: ["Poverty", "Social stigma", "Both"], correct: "Both" },
    { scenario: "Which of these is an essential step in combating child trafficking?", options: ["Awareness programs", "Rescue operations", "Both"], correct: "Both" },
    { scenario: "How are rescued child victims of trafficking treated under Indian law?", options: ["Rehabilitation", "Punishment", "Both"], correct: "Rehabilitation" },
    { scenario: "Which institution has a child protection division to address trafficking issues in India?", options: ["National Commission for Protection of Child Rights", "Central Bureau of Investigation", "National Anti-Trafficking Bureau"], correct: "National Commission for Protection of Child Rights" },
    { scenario: "What is the role of the police in child trafficking cases?", options: ["Investigating cases", "Rescuing victims", "Both"], correct: "Both" },
    { scenario: "What international protocol did India sign to combat child trafficking?", options: ["Palermo Protocol", "Hague Convention", "Geneva Convention"], correct: "Palermo Protocol" },
    { scenario: "What is a common consequence of child trafficking?", options: ["Sexual exploitation", "Forced labor", "Both"], correct: "Both" }
  ]
},
child_protection: {
  easy: [
    { scenario: "What is the primary objective of child protection laws?", options: ["To prevent exploitation", "To provide education", "To promote child labor"], correct: "To prevent exploitation" },
    { scenario: "Which act protects children from abuse and neglect in India?", options: ["The Protection of Children from Sexual Offences Act, 2012", "The Juvenile Justice Act, 2000", "The Child Protection Act, 2005"], correct: "The Protection of Children from Sexual Offences Act, 2012" },
    { scenario: "Can children report cases of abuse under Indian law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which organization is dedicated to child protection in India?", options: ["UNICEF", "National Commission for Protection of Child Rights", "World Health Organization"], correct: "National Commission for Protection of Child Rights" },
    { scenario: "Is child labor prohibited under Indian law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the minimum age for employment of children in India?", options: ["14 years", "16 years", "18 years"], correct: "14 years" },
    { scenario: "Which law governs the protection of children in India?", options: ["The Juvenile Justice Act, 2000", "The Protection of Children from Sexual Offences Act, 2012", "The Child Protection Act, 2005"], correct: "The Juvenile Justice Act, 2000" },
    { scenario: "Which institution works on protecting the rights of children in India?", options: ["National Commission for Protection of Child Rights", "Ministry of Women and Child Development", "Central Bureau of Investigation"], correct: "National Commission for Protection of Child Rights" },
    { scenario: "What does the Juvenile Justice Act focus on?", options: ["Child welfare", "Child punishment", "Child rehabilitation"], correct: "Child welfare" },
    { scenario: "Which of the following is considered child abuse under Indian law?", options: ["Sexual exploitation", "Child labor", "Both"], correct: "Both" }
  ],
  medium: [
    { scenario: "What is the role of the National Commission for Protection of Child Rights?", options: ["To monitor child rights", "To protect children from abuse", "Both"], correct: "Both" },
    { scenario: "Which law regulates child adoption in India?", options: ["The Juvenile Justice Act, 2000", "The Child Adoption Law, 2015", "The Adoption and Foster Care Act"], correct: "The Juvenile Justice Act, 2000" },
    { scenario: "Can children be removed from their homes under the Juvenile Justice Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is a consequence of child abuse under Indian law?", options: ["Penal action", "Family protection", "Both"], correct: "Penal action" },
    { scenario: "Which act protects children from sexual abuse in India?", options: ["The Protection of Children from Sexual Offences Act, 2012", "The Child Labor (Prohibition and Regulation) Act", "The Immoral Traffic (Prevention) Act"], correct: "The Protection of Children from Sexual Offences Act, 2012" },
    { scenario: "Which government body is responsible for child welfare in India?", options: ["Ministry of Women and Child Development", "Ministry of Social Justice", "Ministry of Home Affairs"], correct: "Ministry of Women and Child Development" },
    { scenario: "Can a child be taken into custody under Indian child protection law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the punishment for child sexual abuse under Indian law?", options: ["Up to 3 years imprisonment", "Up to 5 years imprisonment", "Up to life imprisonment"], correct: "Up to life imprisonment" },
    { scenario: "What is the minimum age for consent to sexual activity under Indian law?", options: ["16 years", "18 years", "21 years"], correct: "18 years" },
    { scenario: "Which body monitors child protection laws in India?", options: ["National Commission for Protection of Child Rights", "National Commission for Women", "Supreme Court of India"], correct: "National Commission for Protection of Child Rights" }
  ],
  hard: [
    { scenario: "Which of the following is a key principle of child protection in India?", options: ["Best interests of the child", "Child's right to punishment", "Both A and B"], correct: "Best interests of the child" },
    { scenario: "What is the purpose of the Juvenile Justice Board in India?", options: ["To provide education", "To try juvenile offenders", "To protect children from abuse"], correct: "To try juvenile offenders" },
    { scenario: "Which international convention did India ratify to protect children's rights?", options: ["The United Nations Convention on the Rights of the Child", "The Geneva Convention", "TheInternational Labour Organization Convention No. 182"], correct: "The United Nations Convention on the Rights of the Child" },
    { scenario: "What is the Juvenile Justice Act's approach to juvenile offenders?", options: ["Punitive", "Rehabilitative", "Retributive"], correct: "Rehabilitative" },
    { scenario: "Under Indian law, what is the minimum age of criminal responsibility for children?", options: ["7 years", "12 years", "16 years"], correct: "7 years" },
    { scenario: "How does India protect children from human trafficking?", options: ["By banning child trafficking", "By implementing laws", "Both"], correct: "Both" },
    { scenario: "What is the role of the National Child Protection Society?", options: ["Providing legal protection", "Rescuing children", "Both"], correct: "Both" },
    { scenario: "What does the Protection of Children from Sexual Offences Act primarily address?", options: ["Child sexual abuse", "Child neglect", "Child labor"], correct: "Child sexual abuse" },
    { scenario: "Which body works to ensure the rehabilitation of abused children?", options: ["National Commission for Protection of Child Rights", "Juvenile Justice Board", "Both"], correct: "Both" },
    { scenario: "How does the Juvenile Justice Act address child offenders?", options: ["By imposing fines", "By offering education", "By focusing on rehabilitation"], correct: "By focusing on rehabilitation" }
  ]
},
child_welfare: {
  easy: [
    { scenario: "What is the primary focus of child welfare laws?", options: ["Protection from abuse", "Providing education", "Providing employment"], correct: "Protection from abuse" },
    { scenario: "Which act addresses child welfare in India?", options: ["The Juvenile Justice Act, 2000", "The Child Welfare Act, 2005", "The Child Protection Act, 2007"], correct: "The Juvenile Justice Act, 2000" },
    { scenario: "What is the role of child welfare organizations in India?", options: ["Provide shelter and care", "Provide education", "Both"], correct: "Both" },
    { scenario: "What is the minimum age for a child to be employed in India?", options: ["14 years", "16 years", "18 years"], correct: "14 years" },
    { scenario: "Which government body is primarily responsible for child welfare in India?", options: ["Ministry of Women and Child Development", "Ministry of Education", "Ministry of Social Justice"], correct: "Ministry of Women and Child Development" },
    { scenario: "Is child labor legal in India?", options: ["Yes, if it's non-hazardous", "No", "Yes, if the child is older than 14"], correct: "No" },
    { scenario: "Can children below the age of 18 work in hazardous jobs in India?", options: ["Yes", "No"], correct: "No" },
    { scenario: "What does the term 'child welfare' include?", options: ["Protection, education, and healthcare", "Protection and labor", "Education only"], correct: "Protection, education, and healthcare" },
    { scenario: "Which organization works to improve child welfare globally?", options: ["UNICEF", "NCPCR", "World Health Organization"], correct: "UNICEF" },
    { scenario: "What is the minimum age for a child to be employed in non-hazardous jobs under Indian law?", options: ["14 years", "16 years", "18 years"], correct: "14 years" }
  ],
  medium: [
    { scenario: "Which act governs child welfare and protection in India?", options: ["The Juvenile Justice Act, 2000", "The Child Protection Act, 2005", "The Child Welfare Act, 2007"], correct: "The Juvenile Justice Act, 2000" },
    { scenario: "Which of the following is a principle of child welfare?", options: ["Best interests of the child", "Punishment", "Exploitation of labor"], correct: "Best interests of the child" },
    { scenario: "What does child welfare law in India focus on?", options: ["Preventing abuse and exploitation", "Child employment", "Both"], correct: "Preventing abuse and exploitation" },
    { scenario: "Can children be denied access to education in India?", options: ["Yes", "No"], correct: "No" },
    { scenario: "What is the role of the National Commission for Protection of Child Rights?", options: ["Promoting child welfare", "Regulating child labor", "Both"], correct: "Both" },
    { scenario: "Which Indian law addresses child labor and exploitation?", options: ["The Juvenile Justice Act", "The Child Labor (Prohibition and Regulation) Act", "The Protection of Children from Sexual Offences Act"], correct: "The Child Labor (Prohibition and Regulation) Act" },
    { scenario: "What is the key purpose of the Juvenile Justice Act?", options: ["Punishment of child offenders", "Protection and rehabilitation of children", "Providing employment"], correct: "Protection and rehabilitation of children" },
    { scenario: "Which country ratified the UN Convention on the Rights of the Child to improve child welfare?", options: ["India", "USA", "Canada"], correct: "India" },
    { scenario: "How does India address the issue of children with disabilities?", options: ["By providing education and rehabilitation", "By allowing them to work", "By isolating them"], correct: "By providing education and rehabilitation" },
    { scenario: "Which organization provides financial aid to child welfare programs in India?", options: ["UNICEF", "NCPCR", "National Government of India"], correct: "UNICEF" }
  ],
  hard: [
    { scenario: "What is the legal framework for child welfare in India?", options: ["The Juvenile Justice Act, 2000", "The Protection of Children from Sexual Offences Act", "The National Commission for Protection of Child Rights Act, 2005"], correct: "The Juvenile Justice Act, 2000" },
    { scenario: "Which law addresses the rights of children with disabilities in India?", options: ["The Rights of Persons with Disabilities Act", "The National Trust Act", "The Juvenile Justice Act"], correct: "The Rights of Persons with Disabilities Act" },
    { scenario: "How does India ensure child welfare through adoption laws?", options: ["By providing adoption agencies", "By regulating the adoption process", "Both"], correct: "Both" },
    { scenario: "What is a primary concern under child welfare laws in India?", options: ["Child abuse", "Child employment", "Child neglect"], correct: "Child abuse" },
    { scenario: "What is a challenge in implementing child welfare laws in India?", options: ["Lack of awareness", "Lack of legal frameworks", "Both"], correct: "Both" },
    { scenario: "Which Indian body is responsible for monitoring child welfare in the country?", options: ["National Commission for Protection of Child Rights", "Supreme Court of India", "Ministry of Women and Child Development"], correct: "National Commission for Protection of Child Rights" },
    { scenario: "Which principle does India follow in child welfare laws?", options: ["The welfare of the child is paramount", "Punishment over rehabilitation", "Government control over child rights"], correct: "The welfare of the child is paramount" },
    { scenario: "Which international treaty is India a part of to safeguard children's rights?", options: ["The UN Convention on the Rights of the Child", "The Geneva Convention", "The Universal Declaration of Human Rights"], correct: "The UN Convention on the Rights of the Child" },
    { scenario: "Which of these organizations primarily focuses on child welfare?", options: ["UNICEF", "World Bank", "WHO"], correct: "UNICEF" },
    { scenario: "How does India protect children from harmful labor practices?", options: ["By banning hazardous labor", "By providing rehabilitation", "Both"], correct: "Both" }
  ]
},
equal_pay: {
  easy: [
    { scenario: "What does the concept of equal pay for women mean?", options: ["Paying women the same as men for the same work", "Paying women less than men for the same work", "Paying women more than men for the same work"], correct: "Paying women the same as men for the same work" },
    { scenario: "Is the principle of equal pay for equal work enshrined in the Indian Constitution?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which of the following is a key legal provision for equal pay in India?", options: ["The Equal Remuneration Act, 1976", "The Child Labor Act", "The Protection of Women from Domestic Violence Act"], correct: "The Equal Remuneration Act, 1976" },
    { scenario: "What is the goal of the Equal Remuneration Act, 1976?", options: ["To provide equal wages for equal work", "To provide more wages for women", "To reduce women workers"], correct: "To provide equal wages for equal work" },
    { scenario: "Does India have any laws to ensure equal pay for women?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which organization advocates for equal pay for women in India?", options: ["National Commission for Women", "NCPCR", "Ministry of Social Justice and Empowerment"], correct: "National Commission for Women" },
    { scenario: "What does the Equal Remuneration Act focus on?", options: ["Equal pay for both genders", "Employment quotas for women", "Support for female entrepreneurs"], correct: "Equal pay for both genders" },
    { scenario: "Can women in India file complaints regarding unequal pay?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which section of the Indian Constitution promotes gender equality?", options: ["Article 15", "Article 16", "Article 39(d)"], correct: "Article 39(d)" },
    { scenario: "Is there a gender pay gap in India?", options: ["Yes", "No"], correct: "Yes" }
  ],
  medium: [
    { scenario: "What is the minimum legal standard for wages in India?", options: ["Equal pay for equal work", "Minimum wage", "National wage"], correct: "Equal pay for equal work" },
    { scenario: "What is a common reason for the gender pay gap in India?", options: ["Societal gender bias", "Lack of education for women", "Both"], correct: "Both" },
    { scenario: "Which law prohibits gender-based discrimination in wages in India?", options: ["The Equal Remuneration Act, 1976", "The Minimum Wages Act", "The Protection of Women from Sexual Harassment at Workplace Act"], correct: "The Equal Remuneration Act, 1976" },
    { scenario: "Can women seek legal redress for unequal pay in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which body in India monitors equal pay policies for women?", options: ["National Commission for Women", "Ministry of Women and Child Development", "National Human Rights Commission"], correct: "National Commission for Women" },
    { scenario: "Which of the following is a barrier to equal pay for women in India?", options: ["Societal norms", "Lack of job opportunities", "Both"], correct: "Both" },
    { scenario: "What does the Equal Remuneration Act, 1976 ensure?", options: ["Wages for women", "Equal wages for equal work", "Employment quotas"], correct: "Equal wages for equal work" },
    { scenario: "Does the gender pay gap exist in all sectors in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the role of the National Commission for Women in promoting equal pay?", options: ["Raising awareness", "Monitoring violations", "Both"], correct: "Both" },
    { scenario: "What is the legal age for women to work in India?", options: ["18 years", "16 years", "21 years"], correct: "18 years" }
  ],
  hard: [
    { scenario: "What constitutional provision ensures equal pay for equal work in India?", options: ["Article 39(d)", "Article 16", "Article 15"], correct: "Article 39(d)" },
    { scenario: "What is the major factor contributing to the wage disparity between men and women in India?", options: ["Cultural barriers", "Gender stereotypes", "Both"], correct: "Both" },
    { scenario: "Which government body is responsible for ensuring equal wages for women in India?", options: ["Ministry of Women and Child Development", "Labour Ministry", "National Commission for Women"], correct: "Labour Ministry" },
    { scenario: "Does the gender pay gap in India affect women in all industries?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What impact does gender discrimination in wages have on the economy?", options: ["It increases economic growth", "It leads to gender inequality", "It reduces workforce participation"], correct: "It leads to gender inequality" },
    { scenario: "Which international convention supports equal pay for equal work?", options: ["International Labour Organization Convention No. 100", "The Geneva Convention", "UN Convention on the Elimination of All Forms of Discrimination against Women"], correct: "International Labour Organization Convention No. 100" },
    { scenario: "What is the penalty for not complying with the Equal Remuneration Act, 1976?", options: ["Fine", "Imprisonment", "Both"], correct: "Both" },
    { scenario: "Which of the following is an example of gender-based wage discrimination?", options: ["Paying a woman less for the same job as a man", "Paying a woman more for the same job", "Both"], correct: "Paying a woman less for the same job as a man" },
    { scenario: "What is the key barrier to achieving equal pay in India?", options: ["Lack of legislation", "Cultural biases", "Both"], correct: "Both" },
    { scenario: "Which of these laws is aimed at eliminating gender pay disparity?", options: ["The Equal Remuneration Act, 1976", "The Child Labor (Prohibition and Regulation) Act", "The Women’s Reservation Bill"], correct: "The Equal Remuneration Act, 1976" }
  ]
},
marital_rape: {
  easy: [
    { scenario: "What is marital rape?", options: ["Rape committed by a spouse", "Rape committed by a stranger", "Rape committed by a family member"], correct: "Rape committed by a spouse" },
    { scenario: "Is marital rape considered a criminal offense in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law in India addresses the issue of marital rape?", options: ["The IPC Section 375", "The Protection of Women from Domestic Violence Act", "The Marital Rape Act, 2015"], correct: "The IPC Section 375" },
    { scenario: "Can a woman file a complaint for marital rape in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which of these is an essential element in marital rape?", options: ["Consent", "Love", "Marriage certificate"], correct: "Consent" },
    { scenario: "Is marital rape legally recognized in all countries?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Is marital rape a form of domestic violence?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What does the term 'consent' refer to in the context of marital rape?", options: ["Voluntary agreement", "Forced submission", "Coercion"], correct: "Voluntary agreement" },
    { scenario: "Which organization works towards advocating for marital rape laws in India?", options: ["National Commission for Women", "UNICEF", "International Justice Mission"], correct: "National Commission for Women" },
    { scenario: "Under which Indian Penal Code (IPC) section is marital rape considered?", options: ["Section 375", "Section 498A", "Section 306"], correct: "Section 375" }
  ],
  medium: [
    { scenario: "Which provision of the Indian Penal Code addresses marital rape?", options: ["Section 375", "Section 498A", "Section 377"], correct: "Section 375" },
    { scenario: "What is the marital rape exception in Indian law?", options: ["The husband cannot be charged with rape if the wife is above 15", "Rape in marriage is legal", "The wife must have a child"], correct: "The husband cannot be charged with rape if the wife is above 15" },
    { scenario: "What is the marital rape controversy in India about?", options: ["Legalizing marital rape", "Exempting husbands from rape charges", "Criminalizing divorce"], correct: "Exempting husbands from rape charges" },
    { scenario: "What does the law require to prove marital rape?", options: ["Proof of lack of consent", "Proof of force", "No proof is required"], correct: "Proof of lack of consent" },
    { scenario: "Which Indian Supreme Court ruling contributed to awareness about marital rape?", options: ["Lalit Kumar v. State of UP", "Independent Thought v. Union of India", "State of Punjab v. Gurmeet Singh"], correct: "Independent Thought v. Union of India" },
    { scenario: "Which of these laws does NOT specifically address marital rape in India?", options: ["The Domestic Violence Act", "The Protection of Women from Sexual Harassment at Workplace Act", "The IPC Section 375"], correct: "The Protection of Women from Sexual Harassment at Workplace Act" },
    { scenario: "What does 'consent' mean in marital rape laws?", options: ["Voluntary agreement to sex", "Forced submission", "Silence means consent"], correct: "Voluntary agreement to sex" },
    { scenario: "Can marital rape victims in India file for divorce?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the role of the National Commission for Women regarding marital rape?", options: ["Advocating for legal reforms", "Providing shelter", "Promoting awareness about domestic violence"], correct: "Advocating for legal reforms" },
    { scenario: "What does Section 375 of the IPC state about marital rape?", options: ["It excludes husbands from prosecution", "It allows marital rape prosecution", "It states no rape can occur in marriage"], correct: "It excludes husbands from prosecution" }
  ],
  hard: [
    { scenario: "Which Supreme Court case ruled on the issue of marital rape in India?", options: ["Independent Thought v. Union of India", "Lalit Kumar v. State of UP", "State of Punjab v. Gurmeet Singh"], correct: "Independent Thought v. Union of India" },
    { scenario: "What does Section 375 of the IPC state regarding exceptions to marital rape?", options: ["It excludes husbands from prosecution if the wife is above 15 years old", "It makes marital rape a legal act", "It defines rape only for unmarried persons"], correct: "It excludes husbands from prosecution if the wife is above 15 years old" },
    { scenario: "What is one of the significant challenges in prosecuting marital rape in India?", options: ["Lack of evidence", "Social stigma", "Both"], correct: "Both" },
    { scenario: "What is the argument made by those opposing the criminalization of marital rape in India?", options: ["It undermines marital rights", "It disregards domestic violence laws", "It only applies to married couples"], correct: "It undermines marital rights" },
    { scenario: "What is the Indian law's stance on marital rape under the Protection of Women from Domestic Violence Act?", options: ["It is covered under domestic violence", "It is exempt", "It is prohibited explicitly"], correct: "It is covered under domestic violence" },
    { scenario: "What role does the Indian judiciary play in the issue of marital rape?", options: ["Interpreting laws and ruling on legal exceptions", "Promoting awareness", "Encouraging marriage reforms"], correct: "Interpreting laws and ruling on legal exceptions" },
    { scenario: "What is the current status of marital rape laws in India?", options: ["No criminalization for husbands", "Marital rape is fully criminalized", "Debate continues on the issue"], correct: "Debate continues on the issue" },
    { scenario: "What is the feminist perspective on marital rape in India?", options: ["It should be criminalized", "It should be legalized", "It does not affect women"], correct: "It should be criminalized" },
    { scenario: "What international treaty addresses the issue of marital rape?", options: ["CEDAW", "The Geneva Convention", "The Universal Declaration of Human Rights"], correct: "CEDAW" },
    { scenario: "Which international body advocates for the criminalization of marital rape?", options: ["UN Women", "UNICEF", "WHO"], correct: "UN Women" }
  ]
},
abortion_rights: {
  easy: [
    { scenario: "What is the legal status of abortion in India?", options: ["It is legal under certain conditions", "It is illegal", "It is only legal for married women"], correct: "It is legal under certain conditions" },
    { scenario: "Which law governs abortion rights in India?", options: ["The Medical Termination of Pregnancy Act, 1971", "The Abortion Law Act, 1990", "The Women's Health Act, 1995"], correct: "The Medical Termination of Pregnancy Act, 1971" },
    { scenario: "Can a woman legally seek an abortion in India if her pregnancy poses a risk to her life?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the maximum gestational limit for an abortion in India under most circumstances?", options: ["12 weeks", "20 weeks", "24 weeks"], correct: "20 weeks" },
    { scenario: "Does the Indian law allow abortion due to fetal abnormalities?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a minor girl get an abortion in India?", options: ["Yes, with parental consent", "No", "Yes, without consent"], correct: "Yes, with parental consent" },
    { scenario: "Does the MTP Act permit abortion on demand?", options: ["No, only under specified conditions", "Yes, under any condition", "Yes, only for married women"], correct: "No, only under specified conditions" },
    { scenario: "What is the primary condition for an abortion to be legally performed in India?", options: ["Consent from the woman", "Health risk to the woman", "Both"], correct: "Both" },
    { scenario: "Under Indian law, who is authorized to perform an abortion?", options: ["Registered medical practitioners", "Any doctor", "Only gynecologists"], correct: "Registered medical practitioners" },
    { scenario: "Which is the law that governs abortions in India?", options: ["The Medical Termination of Pregnancy Act", "The Protection of Women's Rights Act", "The Reproductive Health Act"], correct: "The Medical Termination of Pregnancy Act" }
  ],
  medium: [
    { scenario: "What is the condition for an abortion after 12 weeks of pregnancy in India?", options: ["The woman's life is in danger", "The woman is mentally ill", "The pregnancy is a result of rape"], correct: "The woman's life is in danger" },
    { scenario: "What is the legal time limit for abortion in cases of fetal abnormalities in India?", options: ["12 weeks", "20 weeks", "24 weeks"], correct: "24 weeks" },
    { scenario: "Can a married woman seek an abortion without her husband's consent?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which of the following is a legal condition for an abortion in India?", options: ["Risk to the woman's physical or mental health", "Sexual preference", "Age of the woman"], correct: "Risk to the woman's physical or mental health" },
    { scenario: "What does the Medical Termination of Pregnancy Act, 1971 aim to address?", options: ["Legalize abortion", "Regulate the process of abortion", "Prevent illegal abortions"], correct: "Regulate the process of abortion" },
    { scenario: "What is the legal requirement for a woman to undergo an abortion beyond 20 weeks in India?", options: ["Medical board approval", "Parental consent", "Court order"], correct: "Medical board approval" },
    { scenario: "Who can approve an abortion request if the pregnancy exceeds 20 weeks?", options: ["A medical board", "The husband", "The local government"], correct: "A medical board" },
    { scenario: "Which of these statements is correct about abortion rights in India?", options: ["It is only allowed in medical emergencies", "It can be requested by the woman without restrictions", "It is legal with medical approval under certain conditions"], correct: "It is legal with medical approval under certain conditions" },
    { scenario: "Can a woman in India legally get an abortion if the pregnancy was a result of rape?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the role of the National Commission for Women in abortion rights?", options: ["Advocating for safe abortions", "Monitoring implementation of the law", "Both"], correct: "Both" }
  ],
  hard: [
    { scenario: "What are the primary conditions for a legal abortion under the MTP Act, 1971?", options: ["Risk to the woman's health", "Fetal abnormalities", "Both"], correct: "Both" },
    { scenario: "Which of these is a significant concern in the implementation of abortion laws in India?", options: ["Availability of safe procedures", "Public awareness", "Both"], correct: "Both" },
    { scenario: "What was a significant change introduced by the Medical Termination of Pregnancy (Amendment) Act, 2021?", options: ["Extension of the gestational limit to 24 weeks", "Legalization of abortion on demand", "Allowing abortion without medical consultation"], correct: "Extension of the gestational limit to 24 weeks" },
    { scenario: "What body is responsible for providing guidelines for abortion procedures in India?", options: ["Medical Council of India", "National Commission for Women", "Ministry of Health and Family Welfare"], correct: "Medical Council of India" },
    { scenario: "Under the MTP Act, can a woman seek an abortion beyond 24 weeks?", options: ["Yes, with approval from a medical board", "No", "Yes, without any approval"], correct: "Yes, with approval from a medical board" },
    { scenario: "Which factor is NOT considered under the MTP Act for granting an abortion after 20 weeks?", options: ["Social circumstances", "Risk to the woman’s life", "Fetal abnormalities"], correct: "Social circumstances" },
    { scenario: "Which section of the MTP Act mandates confidentiality of the woman's identity?", options: ["Section 5", "Section 6", "Section 4"], correct: "Section 5" },
    { scenario: "Which act works alongside the MTP Act to prevent gender-biased abortions?", options: ["The PCPNDT Act", "The Dowry Prohibition Act", "The Domestic Violence Act"], correct: "The PCPNDT Act" },
    { scenario: "What is one challenge faced by rural women regarding abortion services?", options: ["Lack of access to registered practitioners", "High cost of abortion pills", "Over-regulation by the police"], correct: "Lack of access to registered practitioners" },
    { scenario: "In India, can unmarried women seek an abortion under the MTP Act?", options: ["Yes, under certain conditions", "No", "Only with court approval"], correct: "Yes, under certain conditions" }
  ]
},
child_protection_laws: {
  easy: [
    { scenario: "What is the primary aim of child protection laws?", options: ["To protect children from abuse", "To promote child education", "To regulate child employment"], correct: "To protect children from abuse" },
    { scenario: "Which Indian law protects children from abuse and exploitation?", options: ["The Juvenile Justice Act, 2015", "The Protection of Children from Sexual Offenses Act, 2012", "The Child Labor (Prohibition and Regulation) Act, 1986"], correct: "The Protection of Children from Sexual Offenses Act, 2012" },
    { scenario: "Does the Indian law provide for child protection in case of sexual offenses?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law addresses child trafficking in India?", options: ["The Juvenile Justice Act, 2015", "The Child Trafficking Prevention Act, 2018", "The Immoral Traffic (Prevention) Act, 1956"], correct: "The Juvenile Justice Act, 2015" },
    { scenario: "What is the minimum age of employment for children in India?", options: ["14 years", "18 years", "16 years"], correct: "14 years" },
    { scenario: "Is corporal punishment prohibited in schools in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law ensures the right to education for children in India?", options: ["The Right to Education Act, 2009", "The Juvenile Justice Act, 2015", "The Child Labor (Prohibition and Regulation) Act, 1986"], correct: "The Right to Education Act, 2009" },
    { scenario: "Are child marriages legal in India?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Which body is responsible for child welfare in India?", options: ["National Commission for Protection of Child Rights", "Central Bureau of Investigation", "National Commission for Women"], correct: "National Commission for Protection of Child Rights" },
    { scenario: "What is the role of Child Welfare Committees (CWCs) in India?", options: ["To protect children in distress", "To enforce child labor laws", "To manage child education programs"], correct: "To protect children in distress" }
  ],
  medium: [
    { scenario: "Which law deals with the rehabilitation of juvenile offenders in India?", options: ["The Juvenile Justice Act, 2015", "The Protection of Children from Sexual Offenses Act, 2012", "The Child Labor (Prohibition and Regulation) Act, 1986"], correct: "The Juvenile Justice Act, 2015" },
    { scenario: "Does the law allow adoption of children in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the maximum age for a child to be considered a juvenile under Indian law?", options: ["16 years", "18 years", "21 years"], correct: "18 years" },
    { scenario: "Which body monitors and ensures the implementation of child protection laws in India?", options: ["National Commission for Protection of Child Rights", "State Women’s Commission", "Ministry of Women and Child Development"], correct: "National Commission for Protection of Child Rights" },
    { scenario: "What does the Protection of Children from Sexual Offenses (POCSO) Act, 2012 ensure?", options: ["Prevention of child sexual abuse", "Child welfare in schools", "Both A and B"], correct: "Both A and B" },
    { scenario: "How does the Juvenile Justice Act, 2015 treat juveniles who commit crimes?", options: ["Imprisonment", "Detention in juvenile homes", "None of the above"], correct: "Detention in juvenile homes" },
    { scenario: "What is the punishment for child labor under Indian law?", options: ["Fines", "Imprisonment", "Both A and B"], correct: "Both A and B" },
    { scenario: "Which law prohibits the sale and purchase of children in India?", options: ["The Juvenile Justice Act, 2015", "The Immoral Traffic (Prevention) Act, 1956", "The Child Labor (Prohibition and Regulation) Act, 1986"], correct: "The Immoral Traffic (Prevention) Act, 1956" },
    { scenario: "Can children be trafficked for organ trade under Indian law?", options: ["Yes", "No"], correct: "No" },
    { scenario: "What is the aim of the Right to Education Act, 2009?", options: ["To provide free and compulsory education to children aged 6-14", "To provide education to disabled children", "Both A and B"], correct: "Both A and B" }
  ],
  hard: [
    { scenario: "What does the Juvenile Justice Act, 2015 say about the punishment of minors involved in heinous crimes?", options: ["Can be treated as adults", "Must be rehabilitated", "Can be given capital punishment"], correct: "Can be treated as adults" },
    { scenario: "How does the Protection of Children from Sexual Offenses (POCSO) Act, 2012 define sexual assault?", options: ["Physical contact", "Sexual harassment", "Both A and B"], correct: "Both A and B" },
    { scenario: "What is the role of the National Commission for Protection of Child Rights?", options: ["Advocate for child rights", "Investigate child abuse cases", "Both A and B"], correct: "Both A and B" },
    { scenario: "Which organization is responsible for the implementation of the Right to Education Act, 2009?", options: ["Ministry of Human Resource Development", "Ministry of Women and Child Development", "State Education Departments"], correct: "Ministry of Human Resource Development" },
    { scenario: "What is the legal age for child adoption in India?", options: ["21 years", "25 years", "18 years"], correct: "21 years" },
    { scenario: "Which law provides for the rehabilitation of children found in need of care and protection?", options: ["The Juvenile Justice Act, 2015", "The Child Labor (Prohibition and Regulation) Act, 1986", "The Protection of Children from Sexual Offenses Act, 2012"], correct: "The Juvenile Justice Act, 2015" },
    { scenario: "What is the primary objective of the Integrated Child Protection Scheme (ICPS)?", options: ["Ensure child safety and welfare", "Provide free education to children", "None of the above"], correct: "Ensure child safety and welfare" },
    { scenario: "How does the Indian legal system ensure child protection in the case of child marriages?", options: ["Marriage below the age of 18 is void", "Special provisions for child marriage victims", "Both A and B"], correct: "Both A and B" },
    { scenario: "How are children under the Juvenile Justice Act, 2015 rehabilitated?", options: ["Sent to juvenile homes", "Assigned to foster care", "None of the above"], correct: "Sent to juvenile homes" },
    { scenario: "How does the POCSO Act protect children in schools?", options: ["By mandating the establishment of child protection policies", "By criminalizing child sexual abuse", "Both A and B"], correct: "Both A and B" }
  ]
},

single_mother_rights: {
  easy: [
    { scenario: "What rights do single mothers have under Indian law?", options: ["Parental custody", "Right to maintenance", "Both A and B"], correct: "Both A and B" },
    { scenario: "Is there a law that guarantees maintenance for children born out of wedlock?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a single mother claim the father's responsibility for child support in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law grants a woman the right to adopt a child in India?", options: ["The Adoption Regulations, 2017", "The Juvenile Justice Act, 2015", "The Child Adoption Act, 2000"], correct: "The Juvenile Justice Act, 2015" },
    { scenario: "Is a single mother entitled to maternity benefits in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a single mother get her child's birth certificate?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a single mother demand legal protection from harassment or violence?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are single mothers entitled to equal inheritance rights in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is there any law providing support to single mothers in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a single mother work without facing discrimination under Indian law?", options: ["Yes", "No"], correct: "Yes" }
  ],
  medium: [
    { scenario: "What is the role of the National Commission for Women in supporting single mothers?", options: ["Advocates for single mother rights", "Provides financial aid", "None of the above"], correct: "Advocates for single mother rights" },
    { scenario: "Which Indian law provides for the protection of women from domestic violence?", options: ["The Protection of Women from Domestic Violence Act, 2005", "The Dowry Prohibition Act, 1961", "The Family Courts Act, 1984"], correct: "The Protection of Women from Domestic Violence Act, 2005" },
    { scenario: "Are single mothers eligible for child custody under Indian law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Does Indian law provide financial support to single mothers?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which body oversees the welfare of single mothers and children in India?", options: ["National Commission for Women", "State Women’s Commission", "Ministry of Women and Child Development"], correct: "Ministry of Women and Child Development" },
    { scenario: "Does a single mother in India have the right to remarriage?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which Indian act protects the rights of single mothers in divorce cases?", options: ["The Hindu Marriage Act, 1955", "The Special Marriage Act, 1954", "The Family Courts Act, 1984"], correct: "The Hindu Marriage Act, 1955" },
    { scenario: "Can a single mother legally change her child’s surname?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are single mothers entitled to housing under Indian law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law guarantees protection for single mothers from abandonment?", options: ["The Domestic Violence Act, 2005", "The Family Law, 2005", "The Hindu Marriage Act, 1955"], correct: "The Domestic Violence Act, 2005" }
  ],
  hard: [
    { scenario: "How does Indian law address the inheritance rights of children born to single mothers?", options: ["Equal inheritance rights", "No inheritance rights", "Depends on the religion"], correct: "Equal inheritance rights" },
    { scenario: "What support does the National Commission for Women offer to single mothers?", options: ["Legal aid", "Financial support", "Both A and B"], correct: "Both A and B" },
    { scenario: "What is the status of maintenance claims for children of single mothers under Indian law?", options: ["Only if the father is identified", "Mandatory for all children", "Depends on the state"], correct: "Mandatory for all children" },
    { scenario: "What are the legal challenges faced by single mothers in India?", options: ["Custody disputes", "Abandonment issues", "Both A and B"], correct: "Both A and B" },
    { scenario: "How does the law protect single mothers from domestic violence?", options: ["Protection orders", "Financial compensation", "Both A and B"], correct: "Both A and B" },
    { scenario: "Which law provides for the adoption of children by single mothers in India?", options: ["The Juvenile Justice Act, 2015", "The Child Adoption Act, 2000", "The Adoption Regulations, 2017"], correct: "The Juvenile Justice Act, 2015" },
    { scenario: "Can a single mother legally choose the child’s guardian after her death?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law regulates the maintenance payment from a non-custodial parent?", options: ["The Hindu Marriage Act, 1955", "The Family Courts Act, 1984", "The Maintenance and Welfare of Parents and Senior Citizens Act, 2007"], correct: "The Hindu Marriage Act, 1955" },
    { scenario: "Can a single mother access financial support through government schemes?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is there a law for the legal protection of single mothers from harassment by their partners?", options: ["Yes", "No"], correct: "Yes" }
  ]
},
reproductive_rights: {
  easy: [
    { scenario: "What is the primary right associated with reproductive health?", options: ["Right to choose a partner", "Right to access safe contraception", "Right to early marriage"], correct: "Right to access safe contraception" },
    { scenario: "Is abortion legal in India under certain conditions?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law governs the medical termination of pregnancy in India?", options: ["The MTP Act, 1971", "The IPC", "The Child Marriage Act, 2006"], correct: "The MTP Act, 1971" },
    { scenario: "Are women in India allowed to make decisions about their reproductive health?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is forced sterilization legal in India?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Do women have the right to access fertility treatments in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is the use of contraceptives free for all women in India?", options: ["Yes", "No"], correct: "No" },
    { scenario: "What is the age of consent for marriage in India?", options: ["16", "18", "21"], correct: "18" },
    { scenario: "Can a woman legally refuse a forced pregnancy?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which act regulates assisted reproductive technology in India?", options: ["The ART Regulation Bill, 2020", "The IPC", "The MTP Act, 1971"], correct: "The ART Regulation Bill, 2020" }
  ],
  medium: [
    { scenario: "What does the MTP Act, 1971 provide for?", options: ["Regulates abortion", "Regulates adoption", "Regulates child marriage"], correct: "Regulates abortion" },
    { scenario: "Does the law permit abortion after 20 weeks in cases of severe fetal abnormalities?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is marital rape recognized as a crime under Indian law?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Which of the following laws prohibits sex-selective abortion in India?", options: ["Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994", "MTP Act, 1971", "Protection of Children from Sexual Offenses Act, 2012"], correct: "Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994" },
    { scenario: "Can a woman in India legally access sterilization if she wants it?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is reproductive health a fundamental right for women in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which of the following options is part of reproductive rights?", options: ["Right to childbirth", "Right to contraception", "Right to employment"], correct: "Right to contraception" },
    { scenario: "Does the law in India mandate informed consent for sterilization?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can women in India access menstrual hygiene products freely?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Is there a law that protects women from forced pregnancies in India?", options: ["Yes", "No"], correct: "Yes" }
  ],
  hard: [
    { scenario: "Which law regulates the distribution of contraceptives in India?", options: ["National Health Policy, 2002", "MTP Act, 1971", "The Family Planning Program, 1952"], correct: "The Family Planning Program, 1952" },
    { scenario: "How does the Surrogacy (Regulation) Act, 2021 impact reproductive rights in India?", options: ["It legalizes commercial surrogacy", "It bans commercial surrogacy", "It allows international surrogacy arrangements"], correct: "It bans commercial surrogacy" },
    { scenario: "Which body oversees reproductive health and family planning in India?", options: ["Ministry of Health and Family Welfare", "Ministry of Women and Child Development", "National Commission for Women"], correct: "Ministry of Health and Family Welfare" },
    { scenario: "Does India have a law to protect women from forced sterilization?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What does the Medical Termination of Pregnancy (MTP) Act, 1971 say about abortion?", options: ["Abortion is allowed without restrictions", "Abortion is allowed under specified conditions", "Abortion is completely banned"], correct: "Abortion is allowed under specified conditions" },
    { scenario: "Which international agreement supports the reproductive rights of women in India?", options: ["The Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)", "The Universal Declaration of Human Rights", "The International Covenant on Civil and Political Rights"], correct: "The Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)" },
    { scenario: "Does the law allow women to have the right to make decisions regarding their reproductive health?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the role of the National Commission for Women in reproductive rights?", options: ["Advocates for reproductive rights", "Regulates surrogacy", "Manages family planning policies"], correct: "Advocates for reproductive rights" },
    { scenario: "Which of the following is a key challenge regarding reproductive rights in India?", options: ["Lack of awareness", "Over-regulation", "Full access to services"], correct: "Lack of awareness" },
    { scenario: "Is the right to safe motherhood a constitutional guarantee in India?", options: ["Yes", "No"], correct: "Yes" }
  ]
},
female_education_rights: {
  easy: [
    { scenario: "What does the Right to Education Act, 2009 ensure?", options: ["Free education for children aged 6-14", "Free education for all women", "Paid education for children"], correct: "Free education for children aged 6-14" },
    { scenario: "At what age do children in India have the right to free education?", options: ["5-10 years", "6-14 years", "6-18 years"], correct: "6-14 years" },
    { scenario: "Are women allowed to attend schools and colleges in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law mandates free and compulsory education for children?", options: ["The Right to Education Act, 2009", "The Child Marriage Act, 2006", "The Protection of Children from Sexual Offenses Act, 2012"], correct: "The Right to Education Act, 2009" },
    { scenario: "Can women access higher education in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which age group does the Right to Education Act apply to?", options: ["3-6 years", "6-14 years", "14-18 years"], correct: "6-14 years" },
    { scenario: "Which government program encourages girls’ education in India?", options: ["Beti Bachao Beti Padhao", "Pradhan Mantri Jan Dhan Yojana", "Atal Pension Yojana"], correct: "Beti Bachao Beti Padhao" },
    { scenario: "Is gender discrimination allowed in education in India?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Are schools required to reserve seats for female students under the Right to Education Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Does the government provide scholarships for female students in India?", options: ["Yes", "No"], correct: "Yes" }
  ],
  medium: [
    { scenario: "Does the government provide free textbooks to girls under the Right to Education Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can schools deny admission to female students in India?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Which body monitors the implementation of the Right to Education Act?", options: ["State and National Commissions", "The Ministry of Women and Child Development", "The Ministry of Education"], correct: "The Ministry of Education" },
    { scenario: "Which law supports girls’ education in India?", options: ["The Right to Education Act, 2009", "The Equal Remuneration Act, 1976", "The Protection of Women from Domestic Violence Act, 2005"], correct: "The Right to Education Act, 2009" },
    { scenario: "Are female students in India entitled to safe learning environments?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Does the Right to Education Act mandate the inclusion of women in all subjects?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which government program aims to provide free education to girls in rural areas?", options: ["Saakshar Bharat", "Beti Bachao Beti Padhao", "National Literacy Mission"], correct: "Saakshar Bharat" },
    { scenario: "Can a school expel a female student for being pregnant?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Which law provides for the protection of children from sexual exploitation in schools?", options: ["The Protection of Children from Sexual Offenses Act, 2012", "The Juvenile Justice Act", "The Child Marriage Act, 2006"], correct: "The Protection of Children from Sexual Offenses Act, 2012" },
    { scenario: "Does the government provide incentives to schools to promote girls’ education?", options: ["Yes", "No"], correct: "Yes" }
  ],
  hard: [
    { scenario: "What is the role of the National Commission for Protection of Child Rights in women’s education?", options: ["Monitoring implementation of educational rights", "Providing scholarships", "Regulating school curricula"], correct: "Monitoring implementation of educational rights" },
    { scenario: "What does the term 'gender parity' in education refer to?", options: ["Equal numbers of male and female students", "Equal opportunities for male and female students", "A policy of reservation for women"], correct: "Equal opportunities for male and female students" },
    { scenario: "Which international convention supports girls' education in India?", options: ["The Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)", "The Universal Declaration of Human Rights", "The International Covenant on Civil and Political Rights"], correct: "The Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)" },
    { scenario: "How does the Mid Day Meal Scheme support education for women in India?", options: ["By improving school attendance", "By promoting girl child education", "Both A and B"], correct: "Both A and B" },
    { scenario: "What does the Rashtriya Madhyamik Shiksha Abhiyan (RMSA) aim to achieve?", options: ["Improve secondary education", "Provide scholarships to girls", "Promote women’s leadership in education"], correct: "Improve secondary education" },
    { scenario: "Which law ensures gender equality in school sports?", options: ["The Right to Education Act, 2009", "The Equal Remuneration Act, 1976", "The Sports Code, 2015"], correct: "The Right to Education Act, 2009" },
    { scenario: "How does the Indian government aim to reduce the dropout rate among female students?", options: ["Providing mid-day meals", "Incentives for families", "Both A and B"], correct: "Both A and B" },
    { scenario: "Does the law protect female students from discrimination during admission?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which law ensures that female students are not discriminated against in educational institutions?", options: ["The Right to Education Act, 2009", "The Prevention of Sexual Harassment at Workplace Act, 2013", "The Protection of Women from Domestic Violence Act, 2005"], correct: "The Right to Education Act, 2009" },
    { scenario: "Can female students in India access financial assistance for education?", options: ["Yes", "No"], correct: "Yes" }
  ]
},
protection_of_children_from_sexual_offenses: {
  easy: [
    { scenario: "What is the main purpose of the POCSO Act, 2012?", options: ["To protect children from sexual offenses", "To promote child education", "To protect children's economic rights"], correct: "To protect children from sexual offenses" },
    { scenario: "At what age is a child defined as someone under the POCSO Act?", options: ["Below 18 years", "Below 14 years", "Below 16 years"], correct: "Below 18 years" },
    { scenario: "Does the POCSO Act apply to both boys and girls?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is the POCSO Act applicable in cases of child sexual harassment?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a child give evidence in court under the POCSO Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is there a time limit to report a sexual offense under the POCSO Act?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Who can file a complaint under the POCSO Act?", options: ["Only the child", "Parents, guardians, or any concerned person", "Only the police"], correct: "Parents, guardians, or any concerned person" },
    { scenario: "Does the POCSO Act ensure that the child's identity is protected during the legal process?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is there a provision for medical examination under the POCSO Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What type of offenses does the POCSO Act address?", options: ["Child sexual abuse", "Child labor", "Child trafficking"], correct: "Child sexual abuse" }
  ],
  medium: [
    { scenario: "Which of the following is a provision under the POCSO Act?", options: ["Protection of the child's identity", "Punishment for trafficking", "Compensation for child labor"], correct: "Protection of the child's identity" },
    { scenario: "What is the penalty for committing sexual offenses under the POCSO Act?", options: ["Imprisonment up to life", "Fine only", "No penalty"], correct: "Imprisonment up to life" },
    { scenario: "Can a child file a complaint under the POCSO Act directly?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Is child pornography covered under the POCSO Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is the POCSO Act applicable to both physical and online sexual offenses?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a person convicted under the POCSO Act receive bail?", options: ["Yes", "No"], correct: "No" },
    { scenario: "What is the maximum punishment under the POCSO Act for aggravated sexual assault?", options: ["10 years imprisonment", "Life imprisonment", "Death penalty"], correct: "Life imprisonment" },
    { scenario: "Are the police required to complete their investigation within a specific time frame under the POCSO Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Which agency is responsible for the implementation of the POCSO Act?", options: ["State Police", "Ministry of Women and Child Development", "National Commission for Women"], correct: "State Police" },
    { scenario: "Does the POCSO Act apply to cases of sexual offenses involving minors, even if the offense occurred abroad?", options: ["Yes", "No"], correct: "Yes" }
  ],
  hard: [
    { scenario: "What does Section 9 of the POCSO Act deal with?", options: ["Sexual assault", "Sexual harassment", "Penetrative sexual assault"], correct: "Penetrative sexual assault" },
    { scenario: "Under the POCSO Act, is it a criminal offense to store or share child pornography?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What does the POCSO Act mandate regarding child-friendly court proceedings?", options: ["Proceedings must be conducted in a way that minimizes trauma", "The child must be present in the court during the trial", "Only a police officer can be present in the court"], correct: "Proceedings must be conducted in a way that minimizes trauma" },
    { scenario: "Which of the following is NOT a provision under the POCSO Act?", options: ["Medical examination", "Child identity protection", "Compensation for child labor"], correct: "Compensation for child labor" },
    { scenario: "Can a child under 16 years give their consent to sexual activity under the POCSO Act?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Is the minimum punishment for sexual offenses under the POCSO Act higher than that for ordinary sexual offenses?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Does the POCSO Act address the issue of children being trafficked for sexual exploitation?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the role of the Special Courts under the POCSO Act?", options: ["They hear only cases of child sexual offenses", "They deal with all criminal cases involving children", "They have jurisdiction over civil cases"], correct: "They hear only cases of child sexual offenses" },
    { scenario: "How does the POCSO Act ensure that victims receive mental health support?", options: ["Through counseling provisions", "By providing financial support", "By allowing them to remain anonymous"], correct: "Through counseling provisions" },
    { scenario: "Is the POCSO Act applicable to child sexual abuse cases reported after many years?", options: ["Yes", "No"], correct: "Yes" }
  ]
},
equal_rights_in_marriage: {
  easy: [
    { scenario: "Is polygamy legal in India for women?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Can a woman initiate a divorce under Indian law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can women inherit property equally in a marriage?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Under Indian law, is marital rape considered a crime?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Can a woman in India choose her partner freely?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a married woman keep her maiden name after marriage?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is a woman entitled to alimony after a divorce in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a woman take legal action if her husband commits domestic violence?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Do women have the right to decide their career after marriage?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is a woman entitled to her husband's property after divorce?", options: ["Yes", "No"], correct: "Yes" }
  ],
  medium: [
    { scenario: "Can a married woman file a case for sexual harassment under the Sexual Harassment of Women at Workplace Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is dowry illegal in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can women inherit property under the Hindu Succession Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is a woman allowed to remarry after divorce under Indian law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a woman demand maintenance from her husband after a separation?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is domestic violence recognized as a criminal offense under Indian law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Does the Indian law allow women to be the sole custodians of their children after divorce?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can women in India participate in religious ceremonies during marriage?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are women’s rights to marital property protected by law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a woman refuse to live with her husband if subjected to cruelty?", options: ["Yes", "No"], correct: "Yes" }
  ],
  hard: [
    { scenario: "What is the legal status of a woman’s rights to property under the Hindu Marriage Act, 1955?", options: ["Limited to dowry only", "Can inherit equally", "Subject to her husband's consent"], correct: "Can inherit equally" },
    { scenario: "Under the Indian Penal Code, is marital rape recognized as a crime?", options: ["Yes", "No"], correct: "No" },
    { scenario: "What does the Hindu Succession (Amendment) Act, 2005 guarantee to women?", options: ["Equal rights to ancestral property", "Right to live independently", "Right to choose marriage partner"], correct: "Equal rights to ancestral property" },
    { scenario: "Is the concept of 'joint family' applicable to women under the Hindu Marriage Act?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a woman claim compensation for mental cruelty after divorce?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the significance of the Domestic Violence Act, 2005 in relation to women’s rights?", options: ["Provides relief for physical abuse", "Provides relief for mental abuse", "Provides relief for both physical and mental abuse"], correct: "Provides relief for both physical and mental abuse" },
    { scenario: "Is prenuptial agreement valid in India?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Can a wife inherit her husband's self-acquired property under the Indian law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Under Indian law, can a wife file for maintenance after separation even if she has her own income?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Does the Indian law allow for mutual divorce without any fault on either side?", options: ["Yes", "No"], correct: "Yes" }
  ]
},
women_in_prison: {
  easy: [
    { scenario: "Do women prisoners in India have access to healthcare?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are women prisoners in India entitled to legal aid?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can pregnant women prisoners give birth in prison?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is it legal for women prisoners to be held in overcrowded cells?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Are female prisoners in India provided with vocational training?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can women prisoners receive visits from family members?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are women prisoners entitled to a fair trial?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is it permissible for women prisoners to receive education inside prison?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Do female prisoners have the right to appeal their conviction?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can women prisoners be subjected to solitary confinement under Indian law?", options: ["Yes", "No"], correct: "No" }
  ],
  medium: [
    { scenario: "What is the primary legislation governing the treatment of women prisoners in India?", options: ["The Prisons Act, 1894", "The Juvenile Justice Act", "The National Legal Services Authority Act, 1987"], correct: "The Prisons Act, 1894" },
    { scenario: "Do women prisoners in India have access to rehabilitation programs?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is it mandatory for women prisoners in India to receive psychological counseling?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can women prisoners be placed in prisons meant for men under Indian law?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Are there separate facilities for women prisoners in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a woman prisoner be held in prison after giving birth?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are women prisoners allowed to have access to personal hygiene products?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Does Indian law provide special provisions for the protection of women prisoners from sexual harassment?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is it legal to subject women prisoners to corporal punishment in India?", options: ["Yes", "No"], correct: "No" },
    { scenario: "What is the maximum punishment under Indian law for subjecting women prisoners to inhumane treatment?", options: ["Imprisonment for life", "Death penalty", "Imprisonment for 10 years"], correct: "Imprisonment for life" }
  ],
  hard: [
    { scenario: "Which international treaty guarantees the rights of women prisoners?", options: ["United Nations Standard Minimum Rules for the Treatment of Prisoners", "The International Covenant on Civil and Political Rights", "The European Convention on Human Rights"], correct: "United Nations Standard Minimum Rules for the Treatment of Prisoners" },
    { scenario: "Under which article of the Indian Constitution are the fundamental rights of prisoners, including women, protected?", options: ["Article 14", "Article 21", "Article 23"], correct: "Article 21" },
    { scenario: "What does the 'Prisoners (Treatment) Act, 2013' address?", options: ["Rights of male prisoners", "Rights of female prisoners", "Conditions of death row prisoners"], correct: "Rights of female prisoners" },
    { scenario: "Does the Indian Penal Code include provisions regarding the treatment of women prisoners?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Under Indian law, can women prisoners be denied access to family members or legal representation?", options: ["Yes", "No"], correct: "No" },
    { scenario: "What is the status of women prisoners in India regarding access to post-conviction rehabilitation programs?", options: ["Limited", "None", "Full access"], correct: "Limited" },
    { scenario: "Which organization monitors the rights and welfare of women prisoners in India?", options: ["National Human Rights Commission", "Women and Child Development Ministry", "National Commission for Women"], correct: "National Human Rights Commission" },
    { scenario: "Is there a provision for providing women prisoners with financial support after release?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a woman in India be held in prison without charge or trial?", options: ["Yes", "No"], correct: "No" },
    { scenario: "Is the use of excessive force on women prisoners allowed under Indian law?", options: ["Yes", "No"], correct: "No" }
  ]
},
disabled_women_rights: {
  easy: [
    { scenario: "Are disabled women in India entitled to government financial support?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a disabled woman in India access free education?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are there laws protecting disabled women from discrimination in employment?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can disabled women in India access healthcare services?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Do disabled women in India have the right to vote?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are there any reservation policies for disabled women in government jobs?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can a disabled woman own property in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is there legislation in India ensuring the protection of disabled women's rights?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can disabled women access public transportation without restrictions?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are disabled women provided with financial assistance for assistive devices in India?", options: ["Yes", "No"], correct: "Yes" }
  ],
  medium: [
    { scenario: "What is the primary law that protects the rights of disabled persons in India?", options: ["The Persons with Disabilities (Equal Opportunities, Protection of Rights and Full Participation) Act, 1995", "The Disability Rights Act, 2014", "The Rehabilitation Act, 1998"], correct: "The Persons with Disabilities (Equal Opportunities, Protection of Rights and Full Participation) Act, 1995" },
    { scenario: "Can disabled women in India access government subsidies for their education?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are disabled women entitled to accessible public infrastructure under Indian law?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Do disabled women have the right to work in government institutions?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What kind of healthcare is available for disabled women in India?", options: ["Specialized medical services", "Basic healthcare only", "No healthcare services"], correct: "Specialized medical services" },
    { scenario: "Can disabled women claim financial assistance from the government for their living expenses?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are disabled women eligible for special education programs in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Is it mandatory for private companies to provide job opportunities to disabled women in India?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can disabled women in India apply for a marriage certificate without facing discrimination?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Are there provisions under Indian law for the welfare of disabled women in rural areas?", options: ["Yes", "No"], correct: "Yes" }
  ],
  hard: [
    { scenario: "What does the Rights of Persons with Disabilities Act, 2016 guarantee for disabled women?", options: ["Access to healthcare services", "Access to legal representation", "Equal opportunities in education and employment"], correct: "Equal opportunities in education and employment" },
    { scenario: "Which government body in India oversees the implementation of the Rights of Persons with Disabilities Act, 2016?", options: ["Department of Empowerment of Persons with Disabilities", "Ministry of Women and Child Development", "National Commission for Women"], correct: "Department of Empowerment of Persons with Disabilities" },
    { scenario: "Under Indian law, what is the punishment for discriminating against a disabled woman in employment?", options: ["Imprisonment", "Fine", "Both"], correct: "Both" },
    { scenario: "Is it a criminal offense to deny education to a disabled woman under the Persons with Disabilities Act, 2016?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What is the significance of the National Policy for Persons with Disabilities in relation to disabled women?", options: ["Promotes equal rights and opportunities", "Provides special privileges", "Supports only medical care"], correct: "Promotes equal rights and opportunities" },
    { scenario: "Does Indian law mandate accessible public facilities for disabled women?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "Can disabled women in India seek legal redress if they face discrimination in marriage or family matters?", options: ["Yes", "No"], correct: "Yes" },
    { scenario: "What specific financial assistance is available for disabled women in India?", options: ["Loans for education", "Cash allowances for living expenses", "Subsidies for medical treatment"], correct: "Cash allowances for living expenses" },
    { scenario: "What is the role of NGOs in supporting disabled women in India?", options: ["Providing healthcare", "Advocating for rights", "Both"], correct: "Both" },
    { scenario: "Can disabled women in India claim their inheritance rights?", options: ["Yes", "No"], correct: "Yes" }
  ]
  }};