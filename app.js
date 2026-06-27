/* ============================================================
   IFJ SUP – App JavaScript (FR + AR bilingual)
   ============================================================ */

// ── Translations ─────────────────────────────────────────────
const translations = {
  fr: {
    splash_tagline: 'Former les journalistes de demain',
    search_ph: 'Rechercher formations, actualités…',
    nav_home: 'Accueil', nav_about: 'À Propos', nav_programs: 'Formations',
    nav_news: 'Actualités', nav_media: 'Médiathèque', nav_contact: 'Contact',
    bnav_media: 'Média',
    // Hero
    h1_badge:'Depuis 1994', h1_title:'Former les journalistes<br/><em>de demain</em>',
    h1_desc:"L'école de référence en journalisme et audiovisuel au Maroc", h1_cta:'Découvrir nos formations',
    h2_badge:'Partenariats Internationaux', h2_title:'Ouverture sur<br/><em>le monde</em>',
    h2_desc:'Des partenariats avec Al Jazeera Institute et les grandes écoles de journalisme', h2_cta:'En savoir plus',
    h3_badge:'+3 250 Diplômés', h3_title:'Une excellence<br/><em>reconnue</em>',
    h3_desc:'Rejoignez une communauté de diplômés présents dans les grands médias mondiaux', h3_cta:'Nous rejoindre',
    // Stats
    stat_graduates:'Diplômés', stat_years:"Ans d'expérience",
    stat_units:'Unités pédagogiques', stat_trainers:'Formateurs',
    // Home
    quick_access:'Accès rapide', quick_find:'Nous trouver',
    recent_news:'Actualités récentes', see_all:'Voir tout',
    our_programs:'Nos formations', our_partners:'Nos partenaires',
    lbl_recent:'📅 Récent',
    partner_bm:'Faculté Béni Mellal', partner_gc:'Académie Grand Casablanca', partner_ac:'Commune Aïn Chock',
    // News home cards
    nc1_cat:'Partenariat', nc1_title:'Formation des présentateurs Al Jazeera',
    nc1_excerpt:'IFJ Sup accueille une formation intensive de 5 jours pour les présentateurs de la chaîne Al Jazeera TV.',
    nc2_cat:'Communauté', nc2_title:'Partenariat avec la commune Aïn Chock',
    nc2_excerpt:"Un accord de coopération signé pour renforcer les liens entre l'institut et la collectivité locale.",
    nc3_cat:'Examens', nc3_title:"Soutenances de fin d'études",
    nc3_excerpt:"Les étudiants en fin de cursus présentent leurs projets de fin d'études devant un jury professionnel.",
    // Programs mini
    prog1_title:'Journalisme', prog2_short:'Ingénierie Audiovisuelle',
    prog3_title:'Médias Numériques', prog4_title:'Diplomatie Sportive',
    // About
    about_sub:'Institut Supérieur de Journalisme', our_history:'Notre Histoire',
    about_p1:'Depuis sa création en <strong>1994</strong>, l\'Institut Supérieur de Journalisme et d\'Information « IFJ SUP » demeure sans aucun doute l\'un des précurseurs et pionniers en matière de formation journalistique et audiovisuelle au Maroc.',
    about_p2:"L'IFJ Sup privilégie la formation professionnelle sur l'enseignement académique traditionnel, avec un corps enseignant composé de journalistes et professionnels des médias en activité.",
    our_mission:'Notre Mission',
    miss1_title:'Formation pratique', miss1_desc:"Maîtrise des équipements audio, techniques d'interview et direction de programmes.",
    miss2_title:'Production TV', miss2_desc:"Présentation de journaux télévisés, réalisation d'émissions et effets spéciaux vidéo.",
    miss3_title:'Digital & Web', miss3_desc:'Création de contenu numérique, médias sociaux et journalisme web.',
    miss4_title:'Insertion pro', miss4_desc:'Stages en entreprises, projets personnels audiovisuels et modules continus.',
    team_title:'Équipe de direction',
    role_dg:'Directeur Général Exécutif', role_ped:'Directeur Pédagogique',
    role_jdm:'Directeur Journalisme & Médias Numériques', role_av:'Directeur Ingénierie Audiovisuelle',
    tag_journalist:'Ancien Journaliste', student_life:'Vie estudiantine',
    act1:'⚽ Club Football', act2:'📷 Club Photographie', act3:'📚 Club Littérature',
    act4:'🎤 Radio étudiante', act5:'🎬 Projets audiovisuels', act6:'🌍 Stages internationaux',
    // Programs page
    programs_sub:'6 filières reconnues et accréditées',
    filter_all:'Toutes', filter_licence:'Licence (BAC+3)', filter_tech:'Technicien',
    level_bac:'Niveau BAC',
    prog1_desc:"Formez-vous aux métiers du journalisme print, radio, TV et numérique. Maîtrisez les techniques rédactionnelles, l'interview et l'investigation.",
    prog2_title:'Ingénierie des Technologies Audiovisuelles',
    prog2_desc:'Maîtrisez la réalisation, la production et la postproduction audiovisuelle. Devenez ingénieur son, lumière ou réalisateur TV.',
    prog3_desc:"Journalisme web, réseaux sociaux, podcasting et création de contenu numérique. La formation de l'ère digitale.",
    prog4_desc:'Un programme unique combinant journalisme sportif, relations internationales et communication sportive au niveau professionnel.',
    prog5_title:'Journalisme Technique',
    prog5_desc:'Formation technique en journalisme accessible dès le baccalauréat. Première étape vers une carrière dans les médias.',
    prog6_title:'Technicien Audiovisuel',
    prog6_desc:'Formation technique en production et réalisation audiovisuelle. Maîtrisez les équipements de studio et de terrain.',
    meta_3y:'⏱ 3 ans', meta_2y:'⏱ 2 ans', meta_3yp:'⏱ 3 ans+',
    meta_acc:'🎓 Diplôme accrédité', meta_lmd:'🎓 Licence LMD',
    meta_spec:'🎓 Diplôme spécialisé', meta_brevet:'🎓 Brevet Technicien',
    faq_title:'Questions fréquentes',
    faq1_q:'Quelle est la durée des formations ?',
    faq1_a:'2 ans depuis le niveau BAC ; 3 ans après le BAC (système LMD) ; 2 ans après BAC+3 pour les masters.',
    faq2_q:'Les diplômes sont-ils reconnus ?',
    faq2_a:"Oui, tous les programmes sont accrédités et reconnus par le Ministère de l'Enseignement Supérieur.",
    faq3_q:"Puis-je m'inscrire sans baccalauréat ?",
    faq3_a:'Les candidats sans baccalauréat peuvent s\'inscrire dans les programmes de niveau approprié après évaluation.',
    faq4_q:'Y a-t-il des stages en entreprise ?',
    faq4_a:"Oui, des programmes de stages sont intégrés dans tous les cursus. L'IFJ Sup dispose d'un réseau de partenaires médias pour faciliter l'insertion professionnelle.",
    // News page
    news_sub:"Vie de l'institut & événements",
    nf_all:'Tout', nf_partner:'Partenariats', nf_training:'Formations',
    nf_exams:'Examens', nf_event:'Événements',
    nfc1_title:'Formation intensive des présentateurs Al Jazeera',
    nfc1_body:"IFJ Sup accueille pendant 5 jours les présentateurs et journalistes de la chaîne Al Jazeera TV pour une formation intensive sur les techniques de présentation et la gestion des plateaux télévisés.",
    nfc2_title:'Accord de coopération avec la commune Aïn Chock',
    nfc2_body:"Signature d'un partenariat stratégique entre IFJ Sup et la commune Aïn Chock de Casablanca pour renforcer les liens entre la formation professionnelle et la collectivité locale.",
    nfc3_cat:'Examens', nfc3_title:"Soutenances de projets de fin d'études",
    nfc3_body:"Les étudiants en dernière année présentent leurs projets de fin d'études devant un jury composé de professionnels des médias. Une étape clé vers l'insertion professionnelle.",
    nfc4_cat:'Événement', nfc4_title:'Annonce des examens de fin de semestre',
    nfc4_body:"L'administration annonce le calendrier des examens de fin de semestre. Les étudiants sont invités à consulter leurs emplois du temps et à se préparer en conséquence.",
    nfc5_title:'Atelier de maîtrise des équipements audio',
    nfc5_body:"Un atelier pratique dédié à la maîtrise des équipements audio professionnels : micros de reportage, consoles de mixage et techniques de prise de son en studio et sur le terrain.",
    // Media
    media_sub:'Productions étudiantes & ressources',
    media_videos:'Vidéos', media_photos:'Photos', media_radio:'Radio',
    media_yt:'Voir notre chaîne YouTube',
    mc1_title:'Journal télévisé étudiant', mc1_tag:'TV • Production étudiante',
    mc2_title:'Reportage : Présidentielle au Maroc', mc2_tag:'Reportage • Journalisme',
    mc3_title:'Émission culture & société', mc3_tag:'Magazine • Audiovisuel',
    mc4_title:'Cérémonie de remise de diplômes 2023', mc4_tag:'Photos • Événement',
    mc5_title:'Atelier de formation Al Jazeera', mc5_tag:'Photos • Formation',
    mc6_title:'Émission radio IFJ FM', mc6_tag:'Radio • Actualités',
    // Contact
    contact_sub:'Deux campus au Maroc',
    campus_casa:'📍 Casablanca', campus_mk:'📍 Marrakech',
    casa_name:'Campus Casablanca', casa_badge:'Siège principal',
    mk_name:'Campus Marrakech', mk_badge:'Antenne',
    addr_label:'Adresse', phone_label:'Téléphone', email_label:'Email',
    casa_addr:'97 c, Boulevard Hassan Seghir, Derb Omar, Casablanca',
    mk_addr:'23 Angle Yacoub Mansour, Espace Guéliz 2ème étage, Marrakech',
    casa_map_addr:'97 c, Bd Hassan Seghir<br/>Derb Omar, Casablanca',
    mk_map_addr:'23 Angle Yacoub Mansour<br/>Espace Guéliz, Marrakech',
    map_link:'Ouvrir dans Google Maps →',
    btn_call:'Appeler', follow_us:'Suivez-nous', write_us:'Nous écrire',
    form_name:'Nom complet', form_name_ph:'Votre nom',
    form_email_lbl:'Email', form_email_ph:'votre@email.com',
    form_subject:'Sujet', form_opt0:'Choisir un sujet…',
    form_opt1:'Inscription / Candidature', form_opt2:'Informations formations',
    form_opt3:'Partenariat', form_opt4:'Autre',
    form_msg:'Message', form_msg_ph:'Votre message…',
    form_submit:'Envoyer le message',
    toast_sent:'Message envoyé avec succès ! ✓',
    toast_soon:'Contenu bientôt disponible',
  },
  ar: {
    splash_tagline: 'تكوين صحفيي الغد',
    search_ph: 'ابحث عن تكوينات، أخبار…',
    nav_home: 'الرئيسية', nav_about: 'حول المعهد', nav_programs: 'التكوينات',
    nav_news: 'الأخبار', nav_media: 'مكتبة الوسائط', nav_contact: 'التواصل',
    bnav_media: 'إعلام',
    // Hero
    h1_badge:'منذ 1994', h1_title:'تكوين صحفيي<br/><em>الغد</em>',
    h1_desc:'المدرسة المرجعية في الصحافة والسمعي البصري بالمغرب', h1_cta:'اكتشف تكويناتنا',
    h2_badge:'شراكات دولية', h2_title:'الانفتاح على<br/><em>العالم</em>',
    h2_desc:'شراكات مع مؤسسة الجزيرة للتدريب وكبرى مدارس الصحافة العالمية', h2_cta:'اعرف أكثر',
    h3_badge:'+3250 خريج', h3_title:'تميز<br/><em>معترف به</em>',
    h3_desc:'انضم إلى مجتمع من الخريجين الحاضرين في كبرى وسائل الإعلام العالمية', h3_cta:'انضم إلينا',
    // Stats
    stat_graduates:'خريج', stat_years:'سنة خبرة',
    stat_units:'وحدة بيداغوجية', stat_trainers:'مكوِّن',
    // Home
    quick_access:'وصول سريع', quick_find:'موقعنا',
    recent_news:'آخر الأخبار', see_all:'عرض الكل',
    our_programs:'تكويناتنا', our_partners:'شركاؤنا',
    lbl_recent:'📅 حديث',
    partner_bm:'كلية بني ملال', partner_gc:'أكاديمية الدار البيضاء الكبرى', partner_ac:'جماعة عين الشق',
    // News home cards
    nc1_cat:'شراكة', nc1_title:'تكوين مقدمي قناة الجزيرة',
    nc1_excerpt:'تستضيف IFJ Sup تكويناً مكثفاً لمدة 5 أيام لمقدمي ومراسلي قناة الجزيرة الإخبارية.',
    nc2_cat:'مجتمع', nc2_title:'شراكة مع جماعة عين الشق',
    nc2_excerpt:'إبرام اتفاقية تعاون لتعزيز العلاقة بين المعهد والمجموعة المحلية.',
    nc3_cat:'امتحانات', nc3_title:'مناقشات مشاريع نهاية الدراسة',
    nc3_excerpt:'يقدم طلاب السنة النهائية مشاريع نهاية دراستهم أمام لجنة متخصصة من المهنيين.',
    // Programs mini
    prog1_title:'الصحافة', prog2_short:'هندسة السمعي البصري',
    prog3_title:'الإعلام الرقمي', prog4_title:'الدبلوماسية الرياضية',
    // About
    about_sub:'المعهد العالي للصحافة والإعلام', our_history:'تاريخنا',
    about_p1:'منذ تأسيسه عام <strong>1994</strong>، يُعدّ المعهد العالي للصحافة والإعلام « IFJ SUP » من أبرز الرواد في مجال التكوين الصحفي والسمعي البصري بالمغرب.',
    about_p2:'يُولي IFJ Sup الأولوية للتكوين المهني على حساب التعليم الأكاديمي التقليدي، بفريق تدريسي مكوّن من صحفيين ومهنيي الإعلام الممارسين.',
    our_mission:'مهمتنا',
    miss1_title:'تكوين عملي', miss1_desc:'إتقان الأجهزة الصوتية وتقنيات المقابلة وإدارة البرامج.',
    miss2_title:'إنتاج تلفزيوني', miss2_desc:'تقديم النشرات الإخبارية وإخراج البرامج والمؤثرات البصرية.',
    miss3_title:'الرقمي والويب', miss3_desc:'إنشاء المحتوى الرقمي ووسائل التواصل الاجتماعي والصحافة الإلكترونية.',
    miss4_title:'الإدماج المهني', miss4_desc:'التدريب في المؤسسات والمشاريع السمعية البصرية والوحدات المستمرة.',
    team_title:'فريق الإدارة',
    role_dg:'المدير العام التنفيذي', role_ped:'المدير البيداغوجي',
    role_jdm:'مدير الصحافة والإعلام الرقمي', role_av:'مدير هندسة السمعي البصري',
    tag_journalist:'صحفي سابق', student_life:'الحياة الطلابية',
    act1:'⚽ نادي كرة القدم', act2:'📷 نادي التصوير', act3:'📚 نادي الأدب',
    act4:'🎤 راديو الطلاب', act5:'🎬 مشاريع سمعية بصرية', act6:'🌍 تدريب دولي',
    // Programs page
    programs_sub:'6 شعب معترف بها ومعتمدة',
    filter_all:'الجميع', filter_licence:'الإجازة (باك+3)', filter_tech:'تقني',
    level_bac:'مستوى الباكالوريا',
    prog1_desc:'تكوّن في مهن الصحافة المكتوبة والإذاعية والتلفزيونية والرقمية. أتقن أساليب الكتابة والمقابلة والتحقيق.',
    prog2_title:'هندسة تكنولوجيا السمعي البصري',
    prog2_desc:'أتقن الإخراج والإنتاج وما بعد الإنتاج السمعي البصري. كن مهندس صوت أو إضاءة أو مخرجاً تلفزيونياً.',
    prog3_desc:'الصحافة الإلكترونية ووسائل التواصل الاجتماعي والبودكاست وإنشاء المحتوى الرقمي. تكوين عصر الرقمنة.',
    prog4_desc:'برنامج فريد يجمع بين الصحافة الرياضية والعلاقات الدولية والتواصل الرياضي على المستوى المهني.',
    prog5_title:'الصحافة التقنية',
    prog5_desc:'تكوين تقني في الصحافة متاح منذ الباكالوريا. خطوة أولى نحو مسيرة مهنية في الإعلام.',
    prog6_title:'تقني السمعي البصري',
    prog6_desc:'تكوين تقني في الإنتاج والإخراج السمعي البصري. أتقن معدات الاستوديو والتصوير الميداني.',
    meta_3y:'⏱ 3 سنوات', meta_2y:'⏱ سنتان', meta_3yp:'⏱ 3 سنوات+',
    meta_acc:'🎓 دبلوم معتمد', meta_lmd:'🎓 إجازة ل.م.د',
    meta_spec:'🎓 دبلوم متخصص', meta_brevet:'🎓 شهادة تقني',
    faq_title:'الأسئلة الشائعة',
    faq1_q:'ما هي مدة التكوينات؟',
    faq1_a:'سنتان من مستوى الباكالوريا؛ 3 سنوات بعد الباك (نظام ل.م.د)؛ سنتان بعد الباك+3 للماستر.',
    faq2_q:'هل الدبلومات معترف بها؟',
    faq2_a:'نعم، جميع البرامج معتمدة ومعترف بها من قِبَل وزارة التعليم العالي.',
    faq3_q:'هل يمكنني التسجيل دون الباكالوريا؟',
    faq3_a:'يمكن للمرشحين غير الحاصلين على الباك التسجيل في البرامج الملائمة بعد التقييم.',
    faq4_q:'هل هناك تدريب في المؤسسات؟',
    faq4_a:'نعم، برامج التدريب مدمجة في جميع المسارات. يمتلك IFJ Sup شبكة شركاء إعلاميين لتسهيل الإدماج المهني.',
    // News page
    news_sub:'أنشطة المعهد والفعاليات',
    nf_all:'الكل', nf_partner:'الشراكات', nf_training:'التكوينات',
    nf_exams:'الامتحانات', nf_event:'الفعاليات',
    nfc1_title:'تكوين مكثف لمقدمي قناة الجزيرة',
    nfc1_body:'تستضيف IFJ Sup طوال 5 أيام مقدمي ومراسلي قناة الجزيرة في تكوين مكثف حول تقنيات التقديم وإدارة الاستوديو.',
    nfc2_title:'اتفاقية تعاون مع جماعة عين الشق',
    nfc2_body:'توقيع شراكة استراتيجية بين IFJ Sup وجماعة عين الشق بالدار البيضاء لتعزيز الروابط بين التكوين المهني والجماعة المحلية.',
    nfc3_cat:'امتحانات', nfc3_title:'مناقشات مشاريع نهاية الدراسة',
    nfc3_body:'يقدم طلاب السنة الأخيرة مشاريع نهاية دراستهم أمام لجنة من مهنيي الإعلام. خطوة محورية نحو الإدماج المهني.',
    nfc4_cat:'فعالية', nfc4_title:'الإعلان عن جدول امتحانات نهاية الفصل',
    nfc4_body:'تعلن الإدارة عن جدول امتحانات نهاية الفصل الدراسي. يُدعى الطلاب للاطلاع على جداولهم الزمنية والاستعداد.',
    nfc5_title:'ورشة إتقان الأجهزة الصوتية',
    nfc5_body:'ورشة عملية مخصصة لإتقان الأجهزة الصوتية المحترفة: ميكروفونات التقارير ومزاجات الصوت وتقنيات التسجيل في الاستوديو والميدان.',
    // Media
    media_sub:'إنتاجات طلابية وموارد',
    media_videos:'فيديوهات', media_photos:'صور', media_radio:'راديو',
    media_yt:'شاهد قناتنا على يوتيوب',
    mc1_title:'نشرة أخبار طلابية', mc1_tag:'تلفزيون • إنتاج طلابي',
    mc2_title:'تقرير: الانتخابات بالمغرب', mc2_tag:'تقرير • صحافة',
    mc3_title:'برنامج ثقافة ومجتمع', mc3_tag:'مجلة • سمعي بصري',
    mc4_title:'حفل توزيع الدبلومات 2023', mc4_tag:'صور • فعالية',
    mc5_title:'ورشة تكوين الجزيرة', mc5_tag:'صور • تكوين',
    mc6_title:'برنامج راديو IFJ FM', mc6_tag:'راديو • أخبار',
    // Contact
    contact_sub:'حرمان جامعيان بالمغرب',
    campus_casa:'📍 الدار البيضاء', campus_mk:'📍 مراكش',
    casa_name:'الحرم الجامعي بالدار البيضاء', casa_badge:'المقر الرئيسي',
    mk_name:'الحرم الجامعي بمراكش', mk_badge:'فرع',
    addr_label:'العنوان', phone_label:'الهاتف', email_label:'البريد الإلكتروني',
    casa_addr:'97 ج، شارع الحسن الصغير، درب عمر، الدار البيضاء',
    mk_addr:'23 زاوية يعقوب المنصور، فضاء كيليز الطابق الثاني، مراكش',
    casa_map_addr:'97 ج، شارع الحسن الصغير<br/>درب عمر، الدار البيضاء',
    mk_map_addr:'23 زاوية يعقوب المنصور<br/>فضاء كيليز، مراكش',
    map_link:'افتح في خرائط غوغل ←',
    btn_call:'اتصل', follow_us:'تابعونا', write_us:'راسلونا',
    form_name:'الاسم الكامل', form_name_ph:'اسمك الكامل',
    form_email_lbl:'البريد الإلكتروني', form_email_ph:'بريدك@الإلكتروني.com',
    form_subject:'الموضوع', form_opt0:'اختر موضوعاً…',
    form_opt1:'التسجيل / الترشح', form_opt2:'معلومات التكوينات',
    form_opt3:'شراكة', form_opt4:'أخرى',
    form_msg:'الرسالة', form_msg_ph:'رسالتك…',
    form_submit:'إرسال الرسالة',
    toast_sent:'تم إرسال الرسالة بنجاح ! ✓',
    toast_soon:'المحتوى قادم قريباً',
  }
};

// ── Language state ────────────────────────────────────────────
let currentLang = localStorage.getItem('ifj-lang') || 'fr';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.textContent = lang === 'ar' ? 'FR' : 'عربي';

  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // innerHTML (titles with <em>, paragraphs with <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  localStorage.setItem('ifj-lang', lang);
}

// ── Splash ────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Apply saved language immediately
  setLanguage(currentLang);

  const splash = document.getElementById('splash');
  const app = document.getElementById('app');
  setTimeout(() => {
    splash.style.display = 'none';
    app.classList.remove('hidden');
    animateStats();
  }, 2600);
});

// ── Lang Toggle ───────────────────────────────────────────────
document.getElementById('langBtn')?.addEventListener('click', () => {
  setLanguage(currentLang === 'fr' ? 'ar' : 'fr');
});

// ── Navigation ────────────────────────────────────────────────
const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('.nav-item[data-page]');

function navigateTo(pageId) {
  pages.forEach(p => p.classList.remove('active-page'));
  navItems.forEach(n => n.classList.remove('active-nav'));

  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active-page');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  navItems.forEach(n => {
    if (n.dataset.page === pageId) n.classList.add('active-nav');
  });
  document.querySelectorAll('.drawer-link').forEach(l => {
    l.classList.toggle('active-link', l.dataset.page === pageId);
  });
  closeDrawer();
}

navItems.forEach(item => item.addEventListener('click', () => navigateTo(item.dataset.page)));

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-page]');
  if (!btn) return;
  if (btn.classList.contains('nav-item') || btn.classList.contains('lang-btn')) return;
  navigateTo(btn.dataset.page);
});

// ── Hero Slider ───────────────────────────────────────────────
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.dot');
let currentSlide = 0;
let sliderTimer;

function goToSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  dots[currentSlide].classList.remove('active-dot');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active-slide');
  dots[currentSlide].classList.add('active-dot');
}

function startSlider() {
  sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 4500);
}

dots.forEach(dot => dot.addEventListener('click', () => {
  clearInterval(sliderTimer);
  goToSlide(parseInt(dot.dataset.slide));
  startSlider();
}));

const heroSlider = document.querySelector('.hero-slider');
let touchStartX = 0;
heroSlider?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
heroSlider?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    clearInterval(sliderTimer);
    goToSlide(currentSlide + (dx < 0 ? 1 : -1));
    startSlider();
  }
});

startSlider();

// ── Stats Counter ─────────────────────────────────────────────
function animateStats() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const start  = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / 1400, 1);
      el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target).toLocaleString('fr-FR');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ── Search ────────────────────────────────────────────────────
const searchData = [
  { fr:'Journalisme', ar:'الصحافة', page:'programs' },
  { fr:'Ingénierie Audiovisuelle', ar:'هندسة السمعي البصري', page:'programs' },
  { fr:'Médias Numériques', ar:'الإعلام الرقمي', page:'programs' },
  { fr:'Diplomatie Sportive', ar:'الدبلوماسية الرياضية', page:'programs' },
  { fr:'Campus Casablanca', ar:'الدار البيضاء', page:'contact' },
  { fr:'Campus Marrakech', ar:'مراكش', page:'contact' },
  { fr:'Al Jazeera – Formation', ar:'تكوين الجزيرة', page:'news' },
  { fr:'Partenariat Aïn Chock', ar:'شراكة عين الشق', page:'news' },
  { fr:'Médiathèque', ar:'مكتبة الوسائط', page:'media' },
  { fr:'À Propos – IFJ Sup', ar:'حول IFJ Sup', page:'about' },
];

document.getElementById('searchBtn')?.addEventListener('click', () => {
  document.getElementById('searchOverlay').classList.remove('hidden');
  setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
});
document.getElementById('searchClose')?.addEventListener('click', () => {
  document.getElementById('searchOverlay').classList.add('hidden');
});

document.getElementById('searchInput')?.addEventListener('input', function () {
  const q = this.value.trim().toLowerCase();
  const resultsEl = document.getElementById('searchResults');
  if (!q) { resultsEl.innerHTML = ''; return; }
  const hits = searchData.filter(d =>
    d.fr.toLowerCase().includes(q) || d.ar.includes(q)
  );
  if (!hits.length) {
    const msg = currentLang === 'ar' ? 'لا توجد نتائج.' : 'Aucun résultat trouvé.';
    resultsEl.innerHTML = `<p class="search-no-result">${msg}</p>`;
    return;
  }
  resultsEl.innerHTML = hits.map(h => `
    <div class="search-result-item" data-page="${h.page}">
      <h4>${currentLang === 'ar' ? h.ar : h.fr}</h4>
    </div>`).join('');
  resultsEl.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById('searchOverlay').classList.add('hidden');
      document.getElementById('searchInput').value = '';
      resultsEl.innerHTML = '';
      navigateTo(item.dataset.page);
    });
  });
});

// ── Drawer ────────────────────────────────────────────────────
document.getElementById('menuBtn')?.addEventListener('click', () =>
  document.getElementById('drawer').classList.remove('hidden'));
function closeDrawer() { document.getElementById('drawer')?.classList.add('hidden'); }
document.getElementById('drawerOverlay')?.addEventListener('click', closeDrawer);
document.getElementById('drawerClose')?.addEventListener('click', closeDrawer);

// ── FAQ ───────────────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!open) item.classList.add('open');
  });
});

// ── Program Filter ────────────────────────────────────────────
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active-tab'));
    tab.classList.add('active-tab');
    const f = tab.dataset.filter;
    document.querySelectorAll('.prog-card').forEach(c =>
      c.classList.toggle('hidden', f !== 'all' && c.dataset.category !== f));
  });
});

// ── News Filter ───────────────────────────────────────────────
document.querySelectorAll('.news-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.news-chip').forEach(c => c.classList.remove('active-chip'));
    chip.classList.add('active-chip');
    const cat = chip.dataset.cat;
    document.querySelectorAll('.news-full-card').forEach(c =>
      c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat));
  });
});

// ── Media Tabs ────────────────────────────────────────────────
document.querySelectorAll('.media-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.media-tab').forEach(t => t.classList.remove('active-media-tab'));
    tab.classList.add('active-media-tab');
    const type = tab.dataset.media;
    document.querySelectorAll('.media-card').forEach(c =>
      c.classList.toggle('hidden', c.dataset.type !== type));
  });
});

// ── Campus Tabs ───────────────────────────────────────────────
document.querySelectorAll('.campus-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.campus-tab').forEach(t => t.classList.remove('active-campus'));
    tab.classList.add('active-campus');
    const campus = tab.dataset.campus;
    document.querySelectorAll('.campus-panel').forEach(p =>
      p.classList.toggle('hidden', p.id !== 'campus-' + campus));
  });
});

// ── Contact Form ──────────────────────────────────────────────
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  showToast(translations[currentLang].toast_sent);
  e.target.reset();
});

// ── Toast ─────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 3000);
}

// ── Media cards ───────────────────────────────────────────────
document.querySelectorAll('.media-card').forEach(card =>
  card.addEventListener('click', () => showToast(translations[currentLang].toast_soon)));
