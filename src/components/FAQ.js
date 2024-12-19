"Use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqPGDM = [
    {
        "id": 1,
        "question": "What is PGDM?",
        "answer": "PGDM stands for Post Graduate Diploma in Management. It is a two-year full-time program designed to provide students with a comprehensive understanding of various management principles, tools, and techniques. It is aimed at preparing individuals for leadership roles in the corporate world."
    },
    {
        "id": 2,
        "question": "What are the eligibility criteria for PGDM at Accman College?",
        "answer": "To be eligible for the PGDM program at Accman College, you must meet the following criteria:\n\n- A Bachelor's degree in any discipline from a recognized university with a minimum of 50% marks (45% for SC/ST candidates).\n- Candidates appearing for their final year exams are also eligible to apply.\n- Valid score in entrance exams such as CAT, MAT, XAT, GMAT, or ATMA."
    },
    {
        "id": 3,
        "question": "How can I apply for the PGDM program at Accman College?",
        "answer": "You can apply for the PGDM program at Accman College by following these steps:\n\n1. Visit the official website of Accman College.\n2. Fill out the online application form with your personal and academic details.\n3. Upload necessary documents such as your academic transcripts, entrance exam scorecard, and passport-sized photograph.\n4. Pay the application fee through the online payment portal.\n5. Shortlisted candidates will be called for a group discussion (GD) and personal interview (PI)."
    },
    {
        "id": 4,
        "question": "What is the course structure for PGDM?",
        "answer": "The PGDM program at Accman College is structured to cover core management subjects, along with specialized electives. The program typically includes:\n\n- Semester 1 & 2: Core subjects in management, including Marketing, Finance, HRM, Operations, and Business Strategy.\n- Semester 3 & 4: Specialization in areas such as Marketing, Finance, IT Management, HR, and Operations.\n- Industry Visits, Workshops, and Internships: Practical exposure through industry interactions, live projects, and internships."
    },
    {
        "id": 5,
        "question": "What are the specializations offered in PGDM at Accman College?",
        "answer": "Accman College offers specializations in the following areas:\n\n- Marketing\n- Finance\n- Human Resource Management (HRM)\n- Operations Management\n- Information Technology (IT) Management"
    },
    {
        "id": 6,
        "question": "What is the placement record of PGDM at Accman College?",
        "answer": "Accman College has a strong track record of placements. The Placement Cell at Accman College works actively with corporate partners to secure placements for students. The college organizes grooming sessions, mock interviews, and pre-placement talks to ensure students are prepared for industry requirements."
    },
    {
        "id": 7,
        "question": "What are the career opportunities after completing PGDM?",
        "answer": "Graduates of the PGDM program from Accman College are well-equipped to take on managerial roles across various industries. Career opportunities include:\n\n- Business Manager\n- Marketing Manager\n- Financial Analyst\n- HR Manager\n- Operations Manager\n- IT Manager\n- Entrepreneur/Startup Founder"
    },
    {
        "id": 8,
        "question": "Does Accman College offer any international exposure?",
        "answer": "Yes, Accman College provides opportunities for international exposure through student exchange programs, study tours, and tie-ups with foreign universities. These initiatives allow students to gain global insights and network with international professionals."
    },
    {
        "id": 9,
        "question": "What is the fee structure for the PGDM program?",
        "answer": "The fee structure for the PGDM program at Accman College is competitive and includes tuition fees, library fees, and other charges. Detailed information about the fees can be found on the official website or by contacting the admissions office."
    },
    {
        "id": 10,
        "question": "Are scholarships available for PGDM students?",
        "answer": "Yes, Accman College offers scholarships for meritorious students and those from economically weaker sections. Scholarships are based on academic performance, entrance exam scores, and other criteria set by the college."
    },
    {
        "id": 11,
        "question": "What is the teaching methodology for PGDM?",
        "answer": "The teaching methodology at Accman College includes a blend of traditional lectures, case studies, group discussions, industry interactions, and experiential learning through live projects and internships."
    },
    {
        "id": 12,
        "question": "Does Accman College provide hostel facilities?",
        "answer": "Yes, Accman College provides well-equipped hostel facilities for both male and female students. The hostels offer a comfortable and secure environment conducive to learning."
    },
    {
        "id": 13,
        "question": "Is the PGDM program AICTE approved?",
        "answer": "Yes, the PGDM program at Accman College is approved by the All India Council for Technical Education (AICTE), ensuring quality and recognition across industries."
    },
    {
        "id": 14,
        "question": "Are there any extracurricular activities for PGDM students?",
        "answer": "Accman College encourages extracurricular activities through clubs, societies, cultural events, and sports, fostering holistic development of students alongside their academic journey."
    },
    {
        "id": 15,
        "question": "What is the duration and class schedule for the PGDM program?",
        "answer": "The PGDM program is a two-year, full-time course. Classes are held on weekdays, with some sessions on weekends for guest lectures, workshops, or special projects."
    }
];

const FAQ = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-semibold text-center mb-8">
                Frequently <span className="text-purple-600">Asked</span> Questions
            </h2>

            <div className="space-y-4">
                {faqPGDM.map((faq) => (
                    <div key={faq.id} className="bg-gray-200 rounded-lg">
                        <button
                            className="w-full px-6 py-3 text-left hover:no-underline focus:outline-none flex justify-between items-center"
                            onClick={() => toggleItem(faq.id)}
                        >
                            <span>{faq.question}</span>
                            {openItem === faq.id ? <Minus size={28} className="text-blue-700" /> : <Plus size={28} className="text-blue-700" />}
                        </button>
                        {openItem === faq.id && (
                            <div className="px-6 py-3 bg-white border">
                                <p>{faq.answer}</p>
                                {faq.answer.includes("\n") && (
                                    <ul className="list-disc list-inside space-y-1">
                                        {faq.answer.split("\n").filter(line => line.trim() !== '').map((line, index) => {
                                            // Only display list items if they start with "-" or number
                                            if (line.startsWith("-") || line.match(/^\d+\./)) {
                                                return <li key={index}>{line.trim().replace(/^[-\d]+\s*/, '')}</li>;
                                            }
                                            return <li key={index}>{line.trim()}</li>;
                                        })}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
