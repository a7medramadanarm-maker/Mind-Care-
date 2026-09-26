here/* =========================================================
   MINDCARE
   Premium Editorial Wellness
   Prepared By: Eng Ahmad Ramadan
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const WHATSAPP_NUMBER = "201003089153";
const LANGUAGE_KEY = "mindcare-language";

let currentLanguage =
    localStorage.getItem(LANGUAGE_KEY) || "ar";


/* =========================================================
   ELEMENTS
========================================================= */

const body = document.body;
const html = document.documentElement;

const siteHeader =
    document.getElementById("siteHeader");

const mainNav =
    document.getElementById("mainNav");

const menuToggle =
    document.getElementById("menuToggle");

const languageSwitch =
    document.getElementById("languageSwitch");

const topicModal =
    document.getElementById("topicModal");

const providerModal =
    document.getElementById("providerModal");

const bookingModal =
    document.getElementById("bookingModal");

const assessmentModal =
    document.getElementById("assessmentModal");

const topicContent =
    document.getElementById("topicContent");

const providerContent =
    document.getElementById("providerContent");

const bookingForm =
    document.getElementById("bookingForm");

const bookingSuccess =
    document.getElementById("bookingSuccess");

const bookingDate =
    document.getElementById("bookingDate");

const assessmentContent =
    document.getElementById("assessmentContent");

const assessmentResult =
    document.getElementById("assessmentResult");

const assessmentProgressBar =
    document.getElementById("assessmentProgressBar");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   DATA
========================================================= */

const topics = {

    anxiety: {
        icon: "fa-solid fa-wind",

        title: {
            ar: "القلق والضغط",
            en: "Anxiety & stress"
        },

        intro: {
            ar: "القلق يمكن أن يظهر في صورة تفكير مستمر، توتر جسدي، صعوبة في التركيز أو شعور بأنك دائمًا في حالة استعداد.",
            en: "Anxiety can show up as persistent worry, physical tension, difficulty concentrating, or a constant sense of being on alert."
        },

        symptoms: {
            ar: [
                "التفكير الزائد",
                "التوتر وصعوبة الاسترخاء",
                "صعوبة التركيز",
                "الخوف أو الترقب المستمر"
            ],
            en: [
                "Overthinking",
                "Difficulty relaxing",
                "Difficulty concentrating",
                "Persistent fear or anticipation"
            ]
        },

        help: {
            ar: "الحديث مع مختص قد يساعدك على فهم مصادر القلق وتطوير طرق أكثر فاعلية للتعامل معه.",
            en: "Talking with a professional may help you understand sources of anxiety and develop healthier ways of responding to it."
        },

        sourceName: "NIMH",

        sourceUrl:
            "https://www.nimh.nih.gov/health/topics/anxiety-disorders"

    },


    sleep: {
        icon: "fa-solid fa-moon",

        title: {
            ar: "النوم والإرهاق",
            en: "Sleep & exhaustion"
        },

        intro: {
            ar: "النوم يؤثر بشكل مباشر على الطاقة والمزاج والتركيز. اضطراب النوم المستمر يستحق الاهتمام.",
            en: "Sleep affects energy, mood, and concentration. Persistent sleep difficulties deserve attention."
        },

        symptoms: {
            ar: [
                "صعوبة الدخول في النوم",
                "الاستيقاظ المتكرر",
                "الإرهاق أثناء اليوم",
                "عدم الشعور بالراحة بعد النوم"
            ],
            en: [
                "Difficulty falling asleep",
                "Frequent waking",
                "Daytime fatigue",
                "Not feeling rested after sleep"
            ]
        },

        help: {
            ar: "يمكن أن يساعد تقييم نمط النوم والعوامل النفسية والجسدية المرتبطة به في تحديد الخطوة المناسبة.",
            en: "Looking at sleep patterns and related psychological or physical factors can help identify an appropriate next step."
        },

        sourceName: "NHLBI",

        sourceUrl:
            "https://www.nhlbi.nih.gov/health/sleep-deprivation"
    },


    trauma: {
        icon: "fa-solid fa-feather-pointed",

        title: {
            ar: "التجارب الصعبة",
            en: "Difficult experiences"
        },

        intro: {
            ar: "بعض التجارب يمكن أن تترك أثرًا طويلًا على الإحساس بالأمان والمشاعر والعلاقات.",
            en: "Some experiences can have lasting effects on safety, emotions, relationships, and everyday life."
        },

        symptoms: {
            ar: [
                "تجنب مواقف معينة",
                "التوتر الشديد",
                "ذكريات مزعجة",
                "الشعور بعدم الأمان"
            ],
            en: [
                "Avoiding certain situations",
                "High levels of tension",
                "Distressing memories",
                "Feeling unsafe"
            ]
        },

        help: {
            ar: "الدعم المتخصص يمكن أن يوفر مساحة آمنة لفهم أثر التجربة والتعامل معها تدريجيًا.",
            en: "Professional support can provide a safe space to understand the impact of an experience and work through it gradually."
        },

        sourceName: "NIMH",

        sourceUrl:
            "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd"
    },


    "self-esteem": {
        icon: "fa-solid fa-seedling",

        title: {
            ar: "الثقة بالنفس",
            en: "Self-esteem"
        },

        intro: {
            ar: "علاقتك بنفسك تؤثر على قراراتك وعلاقاتك وطريقة تعاملك مع الأخطاء والنجاحات.",
            en: "Your relationship with yourself can influence decisions, relationships, and how you respond to mistakes and achievements."
        },

        symptoms: {
            ar: [
                "انتقاد النفس باستمرار",
                "الخوف من الفشل",
                "مقارنة نفسك بالآخرين",
                "صعوبة تقدير الإنجازات"
            ],
            en: [
                "Constant self-criticism",
                "Fear of failure",
                "Comparing yourself with others",
                "Difficulty recognizing achievements"
            ]
        },

        help: {
            ar: "يمكن أن يساعد الحوار المهني في فهم الأفكار المتكررة وبناء علاقة أكثر توازنًا مع الذات.",
            en: "Professional conversation can help explore recurring thoughts and build a more balanced relationship with yourself."
        },

        sourceName: "MindCare Educational",

        sourceUrl:
            "https://www.nimh.nih.gov/health"
    },


    relationships: {
        icon: "fa-solid fa-link",

        title: {
            ar: "العلاقات",
            en: "Relationships"
        },

        intro: {
            ar: "العلاقات الصحية تحتاج إلى فهم الحدود والتواصل والاحتياجات العاطفية من الطرفين.",
            en: "Healthy relationships often involve understanding boundaries, communication, and emotional needs."
        },

        symptoms: {
            ar: [
                "صعوبة التعبير عن الاحتياجات",
                "الخلافات المتكررة",
                "الخوف من الرفض",
                "صعوبة وضع الحدود"
            ],
            en: [
                "Difficulty expressing needs",
                "Recurring conflicts",
                "Fear of rejection",
                "Difficulty setting boundaries"
            ]
        },

        help: {
            ar: "العمل مع مختص قد يساعدك على فهم أنماط التواصل وبناء حدود أكثر وضوحًا.",
            en: "Working with a professional may help you understand communication patterns and build clearer boundaries."
        },

        sourceName: "MindCare Educational",

        sourceUrl:
            "https://www.nimh.nih.gov/health"
    }

};


/* =========================================================
   PROVIDERS
========================================================= */

const providers = {

    tasbeh: {
        name: "Tasbeh Mohamed",
        initial: "T",

        specialty: {
            ar: "علم النفس الإكلينيكي",
            en: "Clinical Psychology"
        },

        bio: {
            ar: "تهتم بتوفير مساحة هادئة تساعد على فهم المشاعر والضغوط والعلاقات بطريقة عملية وإنسانية.",
            en: "Focused on creating a calm space to explore emotions, stress, and relationships in a practical and human way."
        },

        areas: {
            ar: [
                "القلق",
                "العلاقات",
                "الثقة بالنفس",
                "النمو الشخصي"
            ],
            en: [
                "Anxiety",
                "Relationships",
                "Self-esteem",
                "Personal growth"
            ]
        }
    },


    mariam: {
        name: "Mariam Mahmoud",
        initial: "M",

        specialty: {
            ar: "علم النفس الإكلينيكي",
            en: "Clinical Psychology"
        },

        bio: {
            ar: "تركز على مساعدة الأفراد في التعامل مع التوتر وتقدير الذات والتحديات اليومية والعلاقات.",
            en: "Focused on helping individuals navigate stress, self-esteem, everyday challenges, and relationships."
        },

        areas: {
            ar: [
                "الضغط",
                "النمو الشخصي",
                "العلاقات",
                "التوازن النفسي"
            ],
            en: [
                "Stress",
                "Personal growth",
                "Relationships",
                "Emotional balance"
            ]
        }
    }

};


/* =========================================================
   ASSESSMENT DATA
========================================================= */

const assessmentQuestions = [

    {
        ar: "خلال الفترة الأخيرة، هل شعرت بتوتر أو قلق يصعب إيقافه؟",
        en: "Recently, have you felt anxious or tense in a way that is difficult to switch off?"
    },

    {
        ar: "هل أثرت مشاعرك أو أفكارك على نومك أو راحتك؟",
        en: "Have your feelings or thoughts affected your sleep or ability to rest?"
    },

    {
        ar: "هل تجد نفسك تنتقد نفسك كثيرًا أو تشك في قدراتك؟",
        en: "Do you often criticize yourself or doubt your abilities?"
    },

    {
        ar: "هل تواجه صعوبة في التعامل مع علاقاتك أو التعبير عن احتياجاتك؟",
        en: "Do you find it difficult to navigate relationships or express your needs?"
    },

    {
        ar: "هل هناك تجربة صعبة ما زالت تؤثر عليك في حياتك اليومية؟",
        en: "Is there a difficult experience that still affects your everyday life?"
    },

    {
        ar: "هل تشعر أن ما تمر به يؤثر على حياتك اليومية أكثر مما ترغب؟",
        en: "Do you feel that what you are experiencing affects your daily life more than you would like?"
    }

];

const assessmentOptions = [
    {
        value: 0,
        ar: "نادراً",
        en: "Rarely"
    },
    {
        value: 1,
        ar: "أحياناً",
        en: "Sometimes"
    },
    {
        value: 2,
        ar: "كثيراً",
        en: "Often"
    }
];

let assessmentIndex = 0;
let assessmentAnswers = [];


/* =========================================================
   LANGUAGE
========================================================= */

function setLanguage(lang) {

    currentLanguage = lang;

    localStorage.setItem(
        LANGUAGE_KEY,
        lang
    );

    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    body.classList.toggle(
        "english-mode",
        lang === "en"
    );

    document
        .querySelectorAll("[data-ar][data-en]")
        .forEach(element => {

            element.textContent =
                element.dataset[lang];

        });

    document
        .querySelectorAll("[data-placeholder-ar][data-placeholder-en]")
        .forEach(element => {

            element.placeholder =
                element.dataset[
                    `placeholder${lang === "ar" ? "Ar" : "En"}`
                ];

        });

    languageSwitch.textContent =
        lang === "ar" ? "EN" : "ع";

    languageSwitch.setAttribute(
        "aria-label",
        lang === "ar"
            ? "Switch to English"
            : "التبديل إلى العربية"
    );

    updateNavigation();
    renderAssessment();
}


/* =========================================================
   NAVIGATION
========================================================= */

function updateNavigation() {

    const navText = {

        ar: {
            home: "الرئيسية",
            how: "كيف تعمل",
            services: "الدعم",
            providers: "المختصون",
            faq: "الأسئلة"
        },

        en: {
            home: "Home",
            how: "How it works",
            services: "Support",
            providers: "Professionals",
            faq: "FAQ"
        }

    };

    document
        .querySelector('[data-section="home"]')
        .textContent = navText[currentLanguage].home;

    document
        .querySelector('[data-section="how"]')
        .textContent = navText[currentLanguage].how;

    document
        .querySelector('[data-section="services"]')
        .textContent = navText[currentLanguage].services;

    document
        .querySelector('[data-section="providers"]')
        .textContent = navText[currentLanguage].providers;

    document
        .querySelector('[data-section="faq"]')
        .textContent = navText[currentLanguage].faq;
}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const open =
        mainNav.classList.toggle("open");

    menuToggle.classList.toggle(
        "active",
        open
    );

    menuToggle.setAttribute(
        "aria-expanded",
        String(open)
    );
}

menuToggle.addEventListener(
    "click",
    toggleMenu
);

mainNav
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove("open");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* =========================================================
   MODALS
========================================================= */

function openModal(modal) {

    if (!modal) return;

    document
        .querySelectorAll(".modal.active")
        .forEach(item => {

            item.classList.remove("active");
            item.setAttribute("aria-hidden", "true");

        });

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    body.classList.add("modal-open");
}


function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    if (
        !document.querySelector(".modal.active")
    ) {
        body.classList.remove("modal-open");
    }
}


document
    .querySelectorAll("[data-close-modal]")
    .forEach(element => {

        element.addEventListener(
            "click",
            () => {

                const modal =
                    element.closest(".modal");

                closeModal(modal);

            }
        );

    });


document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        document
            .querySelectorAll(".modal.active")
            .forEach(modal => {

                closeModal(modal);

            });

    }
);


/* =========================================================
   TOPIC MODAL
========================================================= */

function renderTopic(key) {

    const topic = topics[key];

    if (!topic) return;

    const lang = currentLanguage;

    topicContent.innerHTML = `

        <div class="modal-topic-header">

            <div class="modal-topic-icon">
                <i class="${topic.icon}"></i>
            </div>

            <div>

                <span class="modal-eyebrow">
                    ${
                        lang === "ar"
                            ? "مجال للدعم"
                            : "Area of support"
                    }
                </span>

                <h2>
                    ${topic.title[lang]}
                </h2>

            </div>

        </div>


        <p class="topic-intro">
            ${topic.intro[lang]}
        </p>


        <div class="topic-modal-section">

            <h3>
                ${
                    lang === "ar"
                        ? "قد يظهر في صورة"
                        : "It may show up as"
                }
            </h3>

            <ul class="modal-list">

                ${topic.symptoms[lang]
                    .map(item => `
                        <li>${item}</li>
                    `)
                    .join("")
                }

            </ul>

        </div>


        <div class="help-box">

            <h3>
                ${
                    lang === "ar"
                        ? "كيف يمكن أن يساعد الدعم؟"
                        : "How can support help?"
                }
            </h3>

            <p>
                ${topic.help[lang]}
            </p>

        </div>


        <div class="source-box">

            <div>

                <small>
                    ${
                        lang === "ar"
                            ? "مصدر تعليمي"
                            : "Educational source"
                    }
                </small>

                <strong>
                    ${topic.sourceName}
                </strong>

            </div>

            <a
                class="source-link"
                href="${topic.sourceUrl}"
                target="_blank"
                rel="noopener noreferrer">

                ${
                    lang === "ar"
                        ? "اقرأ المصدر"
                        : "Read source"
                }

                <i class="fa-solid fa-arrow-up-right-from-square"></i>

            </a>

        </div>


        <p class="modal-disclaimer">

            ${
                lang === "ar"
                    ? "المحتوى تعليمي فقط وليس تشخيصًا أو علاجًا طبيًا."
                    : "Educational content only. It is not a diagnosis or medical treatment."
            }

        </p>

    `;

    openModal(topicModal);
}


document
    .querySelectorAll("[data-topic]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                renderTopic(
                    button.dataset.topic
                );

            }
        );

    });


/* =========================================================
   PROVIDER MODAL
========================================================= */

function renderProvider(key) {

    const provider =
        providers[key];

    if (!provider) return;

    const lang =
        currentLanguage;

    providerContent.innerHTML = `

        <div class="provider-modal-header">

            <div class="provider-large-avatar">
                ${provider.initial}
            </div>

            <div>

                <span class="modal-eyebrow">
                    ${provider.specialty[lang]}
                </span>

                <h2>
                    ${provider.name}
                </h2>

            </div>

        </div>


        <div class="provider-modal-body">

            <p>
                ${provider.bio[lang]}
            </p>

            <h3>
                ${
                    lang === "ar"
                        ? "مجالات الاهتمام"
                        : "Areas of focus"
                }
            </h3>

            <div class="provider-tags">

                ${provider.areas[lang]
                    .map(area => `
                        <span class="provider-tag">
                            ${area}
                        </span>
                    `)
                    .join("")
                }

            </div>

            <button
                class="btn btn-primary full-width"
                data-provider-book="${provider.name}"
                type="button">

                ${
                    lang === "ar"
                        ? "احجز جلسة مع هذا المختص"
                        : "Book a session with this professional"
                }

                <i class="fa-solid fa-arrow-left"></i>

            </button>

        </div>

    `;

    const bookButton =
        providerContent.querySelector(
            "[data-provider-book]"
        );

    bookButton.addEventListener(
        "click",
        () => {

            closeModal(providerModal);

            openBooking(
                provider.name
            );

        }
    );

    openModal(providerModal);
}


document
    .querySelectorAll("[data-provider]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                renderProvider(
                    button.dataset.provider
                );

            }
        );

    });


/* =========================================================
   BOOKING
========================================================= */

let bookingStep = 1;


function updateBookingProgress() {

    document
        .querySelectorAll(".booking-progress span")
        .forEach((element, index) => {

            element.classList.toggle(
                "active",
                index + 1 === bookingStep
            );

            element.classList.toggle(
                "completed",
                index + 1 < bookingStep
            );

        });

    document
        .querySelectorAll(".booking-step")
        .forEach(step => {

            step.classList.toggle(
                "active",
                Number(
                    step.dataset.bookingStep
                ) === bookingStep
            );

        });

}


function openBooking(providerName = "") {

    bookingStep = 1;

    bookingForm.reset();

    bookingSuccess.hidden = true;
    bookingSuccess.innerHTML = "";

    document
        .querySelectorAll(
            'input[name="bookingProvider"]'
        )
        .forEach(input => {

            input.checked =
                input.value === providerName;

        });

    if (providerName) {

        const matching =
            document.querySelector(
                `input[name="bookingProvider"][value="${providerName}"]`
            );

        if (matching) {
            matching.checked = true;
        }

    }

    updateBookingProgress();

    openModal(bookingModal);
}


document
    .querySelectorAll("[data-open-booking]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const provider =
                    button.dataset.selectedProvider || "";

                openBooking(provider);

            }
        );

    });


document
    .querySelectorAll("[data-next-step]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (bookingStep === 1) {

                    const selected =
                        document.querySelector(
                            'input[name="bookingProvider"]:checked'
                        );

                    if (!selected) {

                        showBookingValidation(
                            currentLanguage === "ar"
                                ? "اختر المختص أولًا."
                                : "Please choose a professional first."
                        );

                        return;

                    }

                }


                if (bookingStep === 2) {

                    if (
                        !bookingDate.value ||
                        !document.getElementById("bookingTime").value
                    ) {

                        showBookingValidation(
                            currentLanguage === "ar"
                                ? "اختر التاريخ والوقت أولًا."
                                : "Please choose a date and time first."
                        );

                        return;

                    }

                }

                if (bookingStep < 3) {

                    bookingStep++;

                    updateBookingProgress();

                }

            }
        );

    });


document
    .querySelectorAll("[data-prev-step]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (bookingStep > 1) {

                    bookingStep--;

                    updateBookingProgress();

                }

            }
        );

    });


function showBookingValidation(message) {

    bookingSuccess.hidden = false;

    bookingSuccess.innerHTML = `

        <div class="success-inner">

            <i class="fa-solid fa-circle-exclamation"></i>

            <strong>
                ${message}
            </strong>

        </div>

    `;

    setTimeout(() => {

        bookingSuccess.hidden = true;

    }, 2800);
}


/* =========================================================
   BOOKING SUBMIT
========================================================= */

bookingForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        const selectedProvider =
            document.querySelector(
                'input[name="bookingProvider"]:checked'
            );

        if (!selectedProvider) return;

        const name =
            document.getElementById(
                "bookingName"
            ).value.trim();

        const phone =
            document.getElementById(
                "bookingPhone"
            ).value.trim();

        const date =
            bookingDate.value;

        const time =
            document.getElementById(
                "bookingTime"
            ).value;

        const message =
            document.getElementById(
                "bookingMessage"
            ).value.trim();


        const dateObject =
            date
                ? new Date(`${date}T00:00:00`)
                : null;


        const readableDate =
            dateObject
                ? dateObject.toLocaleDateString(
                    currentLanguage === "ar"
                        ? "ar-EG"
                        : "en-US",
                    {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                )
                : date;


        const whatsappText =
            currentLanguage === "ar"

                ? `
مرحبًا MindCare 🌿

أرغب في حجز جلسة.

الاسم: ${name}
رقم الهاتف: ${phone}
المختص: ${selectedProvider.value}
التاريخ: ${readableDate}
الوقت: ${time}

ملاحظات:
${message || "لا يوجد"}

تم إرسال الطلب من موقع MindCare.
                `.trim()

                :

                `
Hello MindCare 🌿

I would like to book a session.

Name: ${name}
Phone: ${phone}
Professional: ${selectedProvider.value}
Date: ${readableDate}
Time: ${time}

Notes:
${message || "None"}

Sent from the MindCare website.
                `.trim();


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;


        bookingForm.style.display = "none";

        bookingSuccess.hidden = false;

        bookingSuccess.innerHTML = `

            <div class="success-inner">

                <i class="fa-solid fa-circle-check"></i>

                <strong>
                    ${
                        currentLanguage === "ar"
                            ? "تم تجهيز طلب الحجز"
                            : "Your booking request is ready"
                    }
                </strong>

                <p>
                    ${
                        currentLanguage === "ar"
                            ? "اضغط على الزر لإرسال تفاصيل الحجز عبر WhatsApp."
                            : "Continue to WhatsApp to send your booking details."
                    }
                </p>

                <a
                    class="btn btn-primary"
                    href="${whatsappURL}"
                    target="_blank"
                    rel="noopener noreferrer">

                    ${
                        currentLanguage === "ar"
                            ? "إرسال عبر WhatsApp"
                            : "Send via WhatsApp"
                    }

                    <i class="fa-brands fa-whatsapp"></i>

                </a>

            </div>

        `;

    }
);


/* =========================================================
   ASSESSMENT
========================================================= */

function resetAssessment() {

    assessmentIndex = 0;

    assessmentAnswers =
        new Array(
            assessmentQuestions.length
        ).fill(null);

    assessmentResult.hidden = true;
    assessmentResult.innerHTML = "";

    assessmentContent.style.display = "block";

    renderAssessment();
}


function renderAssessment() {

    if (!assessmentContent) return;

    const question =
        assessmentQuestions[
            assessmentIndex
        ];

    if (!question) return;

    const lang =
        currentLanguage;

    const selected =
        assessmentAnswers[
            assessmentIndex
        ];


    const progress =
        ((assessmentIndex + 1) /
            assessmentQuestions.length) * 100;


    assessmentProgressBar.style.width =
        `${progress}%`;


    assessmentContent.innerHTML = `

        <div class="assessment-question">

            <p>
                ${question[lang]}
            </p>

            <div class="assessment-options">

                ${assessmentOptions
                    .map(option => `

                        <label>

                            <input
                                type="radio"
                                name="assessmentAnswer"
                                value="${option.value}"
                                ${selected === option.value ? "checked" : ""}>

                            <span>
                                ${option[lang]}
                            </span>

                        </label>

                    `)
                    .join("")
                }

            </div>

        </div>


        <div class="assessment-navigation">

            <button
                class="btn btn-soft"
                id="assessmentBack"
                type="button"
                ${assessmentIndex === 0 ? "disabled" : ""}>

                <i class="fa-solid fa-arrow-right"></i>

                ${
                    lang === "ar"
                        ? "السابق"
                        : "Back"
                }

            </button>


            <button
                class="btn btn-primary"
                id="assessmentNext"
                type="button">

                ${
                    assessmentIndex ===
                    assessmentQuestions.length - 1

                        ? (
                            lang === "ar"
                                ? "عرض النتيجة"
                                : "See result"
                          )

                        : (
                            lang === "ar"
                                ? "التالي"
                                : "Continue"
                          )
                }

                <i class="fa-solid fa-arrow-left"></i>

            </button>

        </div>


        <div class="assessment-warning">

            ${
                lang === "ar"

                    ? "هذا التقييم ليس تشخيصًا طبيًا أو نفسيًا، ولا يغني عن التقييم المهني."

                    : "This assessment is not a medical or psychological diagnosis and does not replace professional evaluation."
            }

        </div>

    `;


    const answerInputs =
        document.querySelectorAll(
            'input[name="assessmentAnswer"]'
        );


    answerInputs.forEach(input => {

        input.addEventListener(
            "change",
            () => {

                assessmentAnswers[
                    assessmentIndex
                ] = Number(input.value);

            }
        );

    });


    document
        .getElementById("assessmentBack")
        .addEventListener(
            "click",
            () => {

                if (assessmentIndex > 0) {

                    assessmentIndex--;

                    renderAssessment();

                }

            }
        );


    document
        .getElementById("assessmentNext")
        .addEventListener(
            "click",
            () => {

                if (
                    assessmentAnswers[
                        assessmentIndex
                    ] === null
                ) {

                    return;

                }


                if (
                    assessmentIndex <
                    assessmentQuestions.length - 1
                ) {

                    assessmentIndex++;

                    renderAssessment();

                } else {

                    calculateAssessment();

                }

            }
        );
}


function calculateAssessment() {

    const score =
        assessmentAnswers.reduce(
            (sum, value) =>
                sum + Number(value || 0),
            0
        );


    const lang =
        currentLanguage;


    let title;
    let description;


    if (score <= 3) {

        title =
            lang === "ar"
                ? "قد تكون هذه فرصة لفهم نفسك أكثر."
                : "This may be a good opportunity to understand yourself further.";

        description =
            lang === "ar"
                ? "الإجابات تشير إلى أن الأعراض التي وصفتها قد تكون محدودة حاليًا. إذا كان هناك شيء يشغلك، يمكنك دائمًا التحدث مع مختص."
                : "Your answers suggest that the experiences you described may currently be limited. If something is still on your mind, you can always speak with a professional.";

    } else if (score <= 8) {

        title =
            lang === "ar"
                ? "قد يكون الحديث مع مختص خطوة مفيدة."
                : "Talking with a professional may be a helpful step.";

        description =
            lang === "ar"
                ? "بعض الإجابات تشير إلى وجود جوانب تستحق الاهتمام. الدعم المهني قد يساعدك على فهمها بشكل أفضل."
                : "Some of your answers suggest areas that may deserve attention. Professional support may help you understand them more clearly.";

    } else {

        title =
            lang === "ar"
                ? "يبدو أن هناك ضغطًا يستحق الاهتمام."
                : "It sounds like there may be significant pressure worth exploring.";

        description =
            lang === "ar"
                ? "قد يكون من المفيد التحدث مع مختص يمكنه الاستماع إلى تجربتك وتقييم احتياجاتك بشكل مهني."
                : "It may be useful to speak with a professional who can listen to your experience and assess your needs appropriately.";

    }


    assessmentContent.style.display = "none";

    assessmentResult.hidden = false;

    assessmentResult.innerHTML = `

        <div class="result-icon">
            <i class="fa-solid fa-seedling"></i>
        </div>

        <h3>
            ${title}
        </h3>

        <p>
            ${description}
        </p>

        <button
            class="btn btn-primary"
            id="assessmentBook"
            type="button">

            ${
                lang === "ar"
                    ? "تحدث مع مختص"
                    : "Talk with a professional"
            }

            <i class="fa-solid fa-arrow-left"></i>

        </button>

        <p class="modal-disclaimer">

            ${
                lang === "ar"
                    ? "هذه النتيجة إرشادية فقط وليست تشخيصًا."
                    : "This result is for guidance only and is not a diagnosis."
            }

        </p>

    `;


    document
        .getElementById("assessmentBook")
        .addEventListener(
            "click",
            () => {

                closeModal(
                    assessmentModal
                );

                openBooking();

            }
        );
}


document
    .querySelectorAll("[data-open-assessment]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                resetAssessment();

                openModal(
                    assessmentModal
                );

            }
        );

    });


/* =========================================================
   FAQ
========================================================= */

document
    .querySelectorAll(".faq-question")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const item =
                    button.closest(".faq-item");


                document
                    .querySelectorAll(".faq-item.active")
                    .forEach(activeItem => {

                        if (activeItem !== item) {

                            activeItem.classList.remove(
                                "active"
                            );

                        }

                    });


                item.classList.toggle(
                    "active"
                );

            }
        );

    });


/* =========================================================
   LANGUAGE SWITCH
========================================================= */

languageSwitch.addEventListener(
    "click",
    () => {

        setLanguage(
            currentLanguage === "ar"
                ? "en"
                : "ar"
        );

    }
);


/* =========================================================
   HEADER SCROLL
========================================================= */

function updateHeader() {

    siteHeader.classList.toggle(
        "scrolled",
        window.scrollY > 20
    );

}

window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link[data-section]"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.dataset.section ===
                        entry.target.id
                    );

                });

            });

        },
        {
            rootMargin:
                "-25% 0px -60% 0px"
        }
    );


sections.forEach(
    section => observer.observe(section)
);


/* =========================================================
   BOOKING DATE
========================================================= */

if (bookingDate) {

    const today =
        new Date().toISOString().split("T")[0];

    bookingDate.min = today;

}


/* =========================================================
   YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   INIT
========================================================= */

setLanguage(
    currentLanguage
);

updateHeader();

updateBookingProgress();
