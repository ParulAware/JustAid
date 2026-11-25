// game_scenarios.js
const scenarios = [
    
    {
        question: "A woman is facing domestic violence. What is her first legal step?",
        options: [
           
            "Go to the police station immediately.",
            "Seek protection under the Domestic Violence Act.",
            "Wait for the situation to improve.",
             "Article 14",
        ],
        correct: 1,
        explanation: "The correct step is to seek protection under the Protection of Women from Domestic Violence Act, 2005."
    },
  
    {
        question: "A minor girl has been abducted. What should her guardian do first?",
        options: [
            "Wait for the police to find her.",
            "File a missing person report at the nearest police station.",
            "Contact the media for immediate coverage.",
            "Contact the local child welfare committee."
        ],
        correct: 1,
        explanation: "The first step is to file a missing person report at the nearest police station. The police can then investigate and take necessary actions."
    },
    {
        question: "A woman is being harassed at her workplace. What legal action can she take?",
        options: [
            "Quit her job immediately.",
            "File a complaint under the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013.",
            "Ignore the situation and continue working.",
            "Report the matter to the police."
        ],
        correct: 1,
        explanation: "The woman can file a complaint under the Sexual Harassment of Women at Workplace Act, 2013, which mandates the establishment of an internal complaint committee."
    },
    {
        question: "A woman is seeking custody of her child after a divorce. Which law applies?",
        options: [
            "The Hindu Marriage Act, 1955.",
            "The Guardians and Wards Act, 1890.",
            "The Protection of Children from Sexual Offences Act, 2012.",
            "The Juvenile Justice (Care and Protection of Children) Act, 2015."
        ],
        correct: 1,
        explanation: "The Guardians and Wards Act, 1890 governs the custody of children and allows the court to grant custody to the mother or father based on the best interests of the child."
    },
    {
        question: "A child is being forced into child labor. What should be the immediate course of action?",
        options: [
            "Tell the child to run away.",
            "Report the situation to the Child Welfare Committee or the police.",
            "Talk to the employer and ask for the child's release.",
            "Ignore it as the child may be working voluntarily."
        ],
        correct: 1,
        explanation: "Child labor is prohibited under the Child and Adolescent Labour (Prohibition and Regulation) Act, 1986. The first step is to report the situation to the Child Welfare Committee or the police."
    },
    {
        question: "A woman is being stalked by an ex-partner. What legal action can she take?",
        options: [
            "File a complaint under the Stalking Law under Section 354D of the Indian Penal Code.",
            "Ignore the situation and avoid confrontation.",
            "Seek the help of family members only.",
            "Contact the ex-partner directly and try to resolve the issue."
        ],
        correct: 0,
        explanation: "The correct legal step is to file a complaint under Section 354D of the Indian Penal Code, which specifically addresses stalking and harassment."
    },
    {
        question: "A child has been found living in a dangerous environment with no guardians. What should be done?",
        options: [
            "Let the child stay there until authorities find out.",
            "Contact the police or Child Welfare Committee immediately for child protection.",
            "Leave the child in an orphanage without further action.",
            "Ask the neighbors to take responsibility for the child."
        ],
        correct: 1,
        explanation: "The first step is to contact the police or Child Welfare Committee to ensure the child's safety and provide necessary care and protection."
    },
    {
        question: "A woman is facing workplace discrimination due to her gender. What legal protection can she seek?",
        options: [
            "File a complaint under the Equal Remuneration Act, 1976.",
            "File a complaint under the Protection of Women from Domestic Violence Act, 2005.",
            "File a case under the Sexual Harassment of Women at Workplace Act, 2013.",
            "File a case under the Juvenile Justice Act."
        ],
        correct: 2,
        explanation: "Under the Sexual Harassment of Women at Workplace Act, 2013, women have legal recourse to challenge any form of harassment or discrimination at the workplace."
    },
    {
        question: "A child is a victim of sexual abuse. What immediate legal step should be taken?",
        options: [
            "Talk to the abuser and ask for an apology.",
            "File a complaint under the Protection of Children from Sexual Offences (POCSO) Act, 2012.",
            "Ignore the incident until the child is older.",
            "Send the child to another relative."
        ],
        correct: 1,
        explanation: "The immediate step should be to file a complaint under the POCSO Act, 2012, which ensures the child’s protection and proper investigation into the offense."
    },
    {
        question: "A child has been detained by the police, but they are under 18 years old. Which law governs the legal proceedings for children in conflict with the law?",
        options: [
            "The Juvenile Justice (Care and Protection of Children) Act, 2015.",
            "The Indian Penal Code (IPC) Section 302.",
            "The Indian Evidence Act, 1872.",
            "The Protection of Children from Sexual Offences (POCSO) Act, 2012."
        ],
        correct: 0,
        explanation: "The Juvenile Justice (Care and Protection of Children) Act, 2015, governs the legal proceedings and the treatment of minors in conflict with the law."
    },
    {
        question: "A woman has been denied a share in her father’s property. Which law ensures her right to inheritance?",
        options: [
            "The Hindu Succession Act, 1956.",
            "The Hindu Marriage Act, 1955.",
            "The Indian Succession Act, 1925.",
            "The Dowry Prohibition Act, 1961."
        ],
        correct: 0,
        explanation: "The Hindu Succession Act, 1956, ensures that women have the right to inherit ancestral property and other forms of inheritance."
    },
    {
        question: "A woman wants to adopt a child but is unsure of the legal process. Which law governs adoption in India?",
        options: [
            "The Adoption and Maintenance Act, 1976.",
            "The Hindu Adoption and Maintenance Act, 1956.",
            "The Juvenile Justice (Care and Protection of Children) Act, 2015.",
            "The Indian Adoption Act, 1949."
        ],
        correct: 2,
        explanation: "Adoption in India is governed by the Juvenile Justice (Care and Protection of Children) Act, 2015, which ensures a child’s welfare is the central focus during the adoption process."
    },
    {
        question: "A child is found working in hazardous conditions. What is the first legal action to take?",
        options: [
            "Ignore it, as the child may be working voluntarily.",
            "Report the situation to the Child Welfare Committee (CWC).",
            "Ask the employer to release the child immediately.",
            "Allow the child to work until they are older."
        ],
        correct: 1,
        explanation: "Under the Child Labour (Prohibition and Regulation) Act, 1986, children working in hazardous conditions should be reported to the Child Welfare Committee (CWC) for immediate intervention."
    },
    {
        question: "A child has been found in an abusive home environment. Which legal body should be contacted for protection?",
        options: [
            "The Juvenile Justice Board.",
            "The National Human Rights Commission.",
            "The District Magistrate.",
            "The National Commission for Women."
        ],
        correct: 0,
        explanation: "The Juvenile Justice Board should be contacted as they have the legal mandate to intervene and ensure the safety and welfare of children in such situations."
    },
    {
        question: "A woman is being physically abused by her spouse. Which law can she use to seek immediate protection?",
        options: [
            "The Protection of Women from Domestic Violence Act, 2005.",
            "The Hindu Marriage Act, 1955.",
            "The Dowry Prohibition Act, 1961.",
            "The Sexual Harassment of Women at Workplace Act, 2013."
        ],
        correct: 0,
        explanation: "The Protection of Women from Domestic Violence Act, 2005 provides immediate protection and legal remedies to women facing domestic violence."
    },
    {
        question: "A child has been subjected to corporal punishment in school. What legal recourse do the parents have?",
        options: [
            "File a complaint under the Right to Education Act, 2009.",
            "Ignore it, as corporal punishment is allowed in schools.",
            "Report the matter to the Child Welfare Committee or local authorities.",
            "Talk to the teacher and resolve the issue."
        ],
        correct: 2,
        explanation: "Corporal punishment is banned in schools under the Right to Education Act, 2009. Parents can report the incident to the Child Welfare Committee or local authorities."
    },
    {
        question: "A woman who has been married for less than 5 years wants a divorce due to domestic violence. What is her legal option?",
        options: [
          "File for divorce under the Hindu Marriage Act, 1955, citing cruelty.",
          "File a case under the Domestic Violence Act, 2005, without seeking divorce.",
          "Wait for the husband to initiate the divorce.",
          "Leave the house and wait for reconciliation."
        ],
        correct: 1,
        explanation: "A woman facing domestic violence can file a case under the Domestic Violence Act, 2005, seeking protection and relief, including a divorce if desired."
      },
      {
        question: "A child is being forced into marriage at the age of 16. What legal action should be taken?",
        options: [
          "Allow the marriage as it is a family decision.",
          "Report the situation to the police or Child Welfare Committee under the Prohibition of Child Marriage Act, 2006.",
          "Ignore the situation and wait for the child to speak up.",
          "Encourage the family to hold off on the marriage for a few years."
        ],
        correct: 1,
        explanation: "Child marriage is illegal under the Prohibition of Child Marriage Act, 2006. Immediate reporting to the police or Child Welfare Committee is necessary to stop the marriage."
      },
      {
        question: "A woman has been denied medical treatment due to her gender. Which law ensures she can seek redress?",
        options: [
          "The Indian Medical Association Act, 1956.",
          "The Medical Termination of Pregnancy Act, 1971.",
          "The Protection of Women from Domestic Violence Act, 2005.",
          "The Equal Remuneration Act, 1976."
        ],
        correct: 1,
        explanation: "The Medical Termination of Pregnancy Act, 1971, guarantees women's rights to necessary medical treatment, especially in cases of abortion or pregnancy-related issues."
      },
      {
        question: "A child has been found in an unsafe working environment. Which law should be invoked to protect the child?",
        options: [
          "The Juvenile Justice (Care and Protection of Children) Act, 2015.",
          "The Child Labour (Prohibition and Regulation) Act, 1986.",
          "The Right to Education Act, 2009.",
          "The Indian Penal Code (IPC) Section 375."
        ],
        correct: 1,
        explanation: "The Child Labour (Prohibition and Regulation) Act, 1986, prohibits children from working in hazardous or exploitative conditions and ensures their protection."
      },
      {
        question: "A woman faces harassment by her in-laws for dowry demands. What legal provision can she use?",
        options: [
          "The Protection of Women from Domestic Violence Act, 2005.",
          "The Dowry Prohibition Act, 1961.",
          "The Child Marriage Restraint Act, 1929.",
          "The Hindu Succession Act, 1956."
        ],
        correct: 1,
        explanation: "The Dowry Prohibition Act, 1961, makes dowry-related harassment a criminal offense and provides legal protection for women facing such abuse."
      },
      {
        question: "A child has been found to be a victim of trafficking. Which law provides legal protection for such children?",
        options: [
          "The Juvenile Justice (Care and Protection of Children) Act, 2015.",
          "The Protection of Children from Sexual Offences (POCSO) Act, 2012.",
          "The Immoral Traffic (Prevention) Act, 1956.",
          "The Indian Penal Code (IPC) Section 370."
        ],
        correct: 2,
        explanation: "The Immoral Traffic (Prevention) Act, 1956, aims to prevent the trafficking of women and children for exploitation, including sexual exploitation."
      },
      {
        question: "A woman is facing harassment in her workplace due to her pregnancy. What legal action can she take?",
        options: [
          "File a complaint under the Maternity Benefit Act, 1961.",
          "Ignore the harassment, as it is a personal matter.",
          "Submit a resignation letter and leave.",
          "Ask for a transfer to a different department."
        ],
        correct: 0,
        explanation: "The Maternity Benefit Act, 1961, provides legal protection to women during pregnancy and ensures that they are not discriminated against in their workplace."
      },
      {
        question: "A child is being forced into begging. Which legal body should intervene for the child's protection?",
        options: [
          "The National Human Rights Commission.",
          "The Juvenile Justice Board.",
          "The National Commission for Women.",
          "The Child Welfare Committee."
        ],
        correct: 3,
        explanation: "The Child Welfare Committee (CWC) is the statutory body responsible for intervening and ensuring the protection of children found in hazardous or exploitative situations, including begging."
      },
      {
        question: "A woman is denied the right to reside in her marital home. Which law provides protection to her?",
        options: [
          "The Hindu Marriage Act, 1955.",
          "The Protection of Women from Domestic Violence Act, 2005.",
          "The Divorce Act, 1869.",
          "The Child Marriage Restraint Act, 1929."
        ],
        correct: 1,
        explanation: "The Protection of Women from Domestic Violence Act, 2005, grants women the right to reside in their matrimonial home, even if they are not currently living there due to violence or harassment."
      },
      {
        question: "A child is involved in a road accident and requires emergency care. Which law mandates free medical care for children in such situations?",
        options: [
          "The Juvenile Justice (Care and Protection of Children) Act, 2015.",
          "The National Health Policy, 2002.",
          "The Medical Termination of Pregnancy Act, 1971.",
          "The Right to Education Act, 2009."
        ],
        correct: 0,
        explanation: "The Juvenile Justice (Care and Protection of Children) Act, 2015, ensures that children in need of care and protection receive medical treatment, including emergency care."
      },
      {
        question: "A woman has been victimized by cyberbullying. Which law can she use to seek redress?",
        options: [
          "The Information Technology Act, 2000, Section 66A.",
          "The Dowry Prohibition Act, 1961.",
          "The Protection of Women from Domestic Violence Act, 2005.",
          "The Indian Penal Code (IPC) Section 375."
        ],
        correct: 0,
        explanation: "The Information Technology Act, 2000, particularly Section 66A, addresses cyberbullying and provides legal recourse for women facing online harassment."
      },
      {
        question: "A child is found living on the streets. Which legal process should be followed for their rehabilitation?",
        options: [
          "Hand the child back to their family.",
          "Report the situation to the Child Welfare Committee for rehabilitation.",
          "Ask the child to join a shelter home voluntarily.",
          "Take the child to a police station."
        ],
        correct: 1,
        explanation: "The Child Welfare Committee (CWC) should be informed to ensure that the child receives appropriate care, rehabilitation, and protection as per the Juvenile Justice (Care and Protection of Children) Act, 2015."
      },
      {
        question: "A woman is being coerced into withdrawing her case for sexual harassment. What legal protection is available to her?",
        options: [
          "File a police report under the IPC Section 506 (Criminal Intimidation).",
          "Agree to withdraw the case to avoid further conflict.",
          "Consult with the employer and resolve the issue internally.",
          "Seek help from a women’s organization for legal assistance."
        ],
        correct: 0,
        explanation: "Coercion to withdraw a sexual harassment case is illegal. The woman can file a police report for criminal intimidation under IPC Section 506."
      },
      {
        question: "A woman is facing sexual harassment while commuting in public transport. What is her legal recourse?",
        options: [
          "File a complaint under the Indian Penal Code (IPC) Section 354.",
          "Ignore it as it’s common in public places.",
          "Inform the driver or conductor and leave the scene.",
          "Wait for the next incident to report."
        ],
        correct: 0,
        explanation: "Under IPC Section 354, sexual harassment in public places is a punishable offense, and the woman should immediately file a complaint with the police."
      },
      {
        question: "A child has been caught in a conflict with the law and is arrested. Which legal act protects the rights of this child?",
        options: [
          "The Indian Penal Code (IPC).",
          "The Juvenile Justice (Care and Protection of Children) Act, 2015.",
          "The Protection of Children from Sexual Offences (POCSO) Act, 2012.",
          "The Child Labour (Prohibition and Regulation) Act, 1986."
        ],
        correct: 1,
        explanation: "The Juvenile Justice (Care and Protection of Children) Act, 2015 provides a framework for the legal proceedings and rights of children in conflict with the law."
      },
      {
        question: "A woman is seeking to file for divorce, but her husband refuses to grant it. What legal provision allows her to proceed?",
        options: [
          "The Hindu Marriage Act, 1955.",
          "The Divorce Act, 1869.",
          "The Special Marriage Act, 1954.",
          "The Protection of Women from Domestic Violence Act, 2005."
        ],
        correct: 0,
        explanation: "Under the Hindu Marriage Act, 1955, a woman can file for divorce on grounds such as cruelty, desertion, or adultery, even if the husband refuses."
      },
      {
        question: "A child is found living in an abusive household. Who can report the situation to initiate legal action?",
        options: [
          "Only a parent can report the abuse.",
          "A neighbor or any concerned citizen can report to the Child Welfare Committee.",
          "The child should directly approach the police.",
          "Only a relative can intervene."
        ],
        correct: 1,
        explanation: "Anyone, including neighbors or concerned citizens, can report the abuse to the Child Welfare Committee, which will take the necessary legal steps to protect the child."
      },
      {
        question: "A woman is being harassed by her employer. What law can she invoke to seek protection?",
        options: [
          "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.",
          "The Equal Remuneration Act, 1976.",
          "The Maternity Benefit Act, 1961.",
          "The Indian Penal Code (IPC) Section 354."
        ],
        correct: 0,
        explanation: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 provides legal recourse for women facing harassment in the workplace."
      },
      {
        question: "A child is living in an orphanage and wants to be adopted. What law regulates the adoption process in India?",
        options: [
          "The Hindu Adoption and Maintenance Act, 1956.",
          "The Juvenile Justice (Care and Protection of Children) Act, 2015.",
          "The Indian Succession Act, 1925.",
          "The Adoption and Maintenance Act, 1976."
        ],
        correct: 1,
        explanation: "The Juvenile Justice (Care and Protection of Children) Act, 2015 governs the adoption process for children in India, ensuring their rights and welfare."
      },
      {
        question: "A woman who is being mentally abused by her husband wants a legal remedy. Which law provides relief?",
        options: [
          "The Hindu Marriage Act, 1955.",
          "The Protection of Women from Domestic Violence Act, 2005.",
          "The Indian Penal Code (IPC) Section 498A.",
          "The Divorce Act, 1869."
        ],
        correct: 1,
        explanation: "The Protection of Women from Domestic Violence Act, 2005 provides relief to women facing physical, emotional, and mental abuse from their partners."
      },
      {
        question: "A child is a victim of child marriage. What law prohibits and seeks to prevent such marriages?",
        options: [
          "The Prohibition of Child Marriage Act, 2006.",
          "The Hindu Marriage Act, 1955.",
          "The Child Marriage Restraint Act, 1929.",
          "The Juvenile Justice (Care and Protection of Children) Act, 2015."
        ],
        correct: 0,
        explanation: "The Prohibition of Child Marriage Act, 2006 makes child marriage illegal and provides legal recourse for girls who are married before the legal age."
      },
      {
        question: "A woman who is a victim of trafficking wants to escape the situation. What legal support is available to her?",
        options: [
          "File a complaint under the Immoral Traffic (Prevention) Act, 1956.",
          "Run away to another state.",
          "Wait for the traffickers to release her.",
          "Request the traffickers for help."
        ],
        correct: 0,
        explanation: "Under the Immoral Traffic (Prevention) Act, 1956, women and children can seek protection from trafficking and exploitation. The authorities are legally bound to intervene."
      },
      {
        question: "A child’s guardian refuses to allow them to receive a formal education. Which law ensures the child’s right to education?",
        options: [
          "The Right to Education Act, 2009.",
          "The Indian Penal Code (IPC) Section 323.",
          "The Juvenile Justice (Care and Protection of Children) Act, 2015.",
          "The Hindu Marriage Act, 1955."
        ],
        correct: 0,
        explanation: "The Right to Education Act, 2009 ensures that every child between the ages of 6 and 14 years has the right to receive free and compulsory education."
      },
      {
        question: "A woman is being pressured to drop a complaint of domestic violence by her family. What should she do?",
        options: [
          "Withdraw the complaint to keep peace in the family.",
          "File a case under the Domestic Violence Act, 2005, to maintain her safety.",
          "Ignore the situation and stay silent.",
          "Ask the abuser to apologize and resolve it privately."
        ],
        correct: 1,
        explanation: "A woman has the legal right to seek protection under the Domestic Violence Act, 2005, even if pressured by family members to drop the complaint."
      },
    {
        question: "A child has been detained in a juvenile home for committing a crime. What is the focus of the Juvenile Justice Act in such cases?",
        options: [
            "Punishment for the crime committed by the child.",
            "Rehabilitation and care for the child’s reintegration into society.",
            "Detaining the child until they turn 18.",
            "Punitive action to set an example."
        ],
        correct: 1,
        explanation: "The focus of the Juvenile Justice (Care and Protection of Children) Act, 2015 is rehabilitation, care, and reintegration of the child into society, rather than punishment."
    }
  
    // Add more scenarios as needed
];

export { scenarios };

