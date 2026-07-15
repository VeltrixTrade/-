// ==========================================
// مطعم مطبخ نانيتي - المنطق التفاعلي وقائمة الطعام
// ==========================================

// بيانات المنيو الكاملة
const menuItems = [
    // 1. الفطور الصباحي
    {
        id: "bf-1",
        name: "باجة خاتون البيت (1 نفر)",
        price: 15000,
        category: "breakfast",
        desc: "باجة عراقية موصلية مطبوخة على نار هادئة طوال الليل بنكهة وبهارات الجدات الأصلية.",
        icon: "fa-solid fa-bowl-food",
        tag: "فطور مميز"
    },
    {
        id: "bf-2",
        name: "باجة (نص نفر)",
        price: 8000,
        category: "breakfast",
        desc: "نصف نفر باجة موصلية لذيذة محضرة من اللحوم الطازجة والبهارات المميزة.",
        icon: "fa-solid fa-bowl-food",
        tag: "فطور"
    },
    {
        id: "bf-3",
        name: "قلية باب السراي",
        price: 12000,
        category: "breakfast",
        desc: "القلية الموصلية الشهيرة على أصولها، لحم غنم مقلى مع اللية والتوابل الفريدة.",
        icon: "fa-solid fa-fire-burner",
        tag: "شعبي أصيل"
    },
    {
        id: "bf-4",
        name: "تشريب قلية",
        price: 12000,
        category: "breakfast",
        desc: "تشريب القلية الموصلية بمرقها الغني ونكهتها الدافئة تقدم مع خبز التنور الساخن.",
        icon: "fa-solid fa-bowl-soup",
        tag: "فطور"
    },
    {
        id: "bf-5",
        name: "تشريب كص لحم",
        price: 12000,
        category: "breakfast",
        desc: "شرائح لحم الكص العراقي الفاخر المتبل على طريقة الجدات مع خبز التشريب المبلل بالمرق.",
        icon: "fa-solid fa-bowl-soup",
        tag: "فطور دسم"
    },
    {
        id: "bf-6",
        name: "باسطرمة ست البيت (مع البيض أو الطماطة)",
        price: 8000,
        category: "breakfast",
        desc: "باسطرمة عراقية شغل بيت تفوح منها رائحة الثوم والبهارات، مقلية مع البيض البلدي أو الطماطم الطازجة.",
        icon: "fa-solid fa-egg",
        tag: "تراثي"
    },
    {
        id: "bf-7",
        name: "باقلا بالدهن",
        price: 6000,
        category: "breakfast",
        desc: "طبق الفطور العراقي الكلاسيكي: خبز منقوع بماء الباقلاء المغلي، مغطى بالباقلاء والبطنج والدهن الحر مع البيض.",
        icon: "fa-solid fa-stroopwafel",
        tag: "الدهن الحر"
    },
    {
        id: "bf-8",
        name: "برمة نانيتي",
        price: 5000,
        category: "breakfast",
        desc: "وصفة الجدة نانيتي الخاصة للفطور الصباحي الدافئ بنكهة لا تُنسى.",
        icon: "fa-solid fa-mortar-pestle",
        tag: "خاص بنانيتي"
    },

    // 2. كبب خاتون الموصل
    {
        id: "kb-1",
        name: "كبة خاتون حجم كبير",
        price: 9000,
        category: "kubba",
        desc: "كبة الموصل الكبيرة الشهيرة، رقيقة ومحشوة بلحم الغنم واللية والمكسرات الفاخرة.",
        icon: "fa-solid fa-circle-dot",
        tag: "الأكثر طلباً"
    },
    {
        id: "kb-2",
        name: "كبة حامض (1 نفر)",
        price: 12000,
        category: "kubba",
        desc: "كبة جريش ناعمة مطبوخة بمرق الشلغم والسلق الحامض اللذيذ.",
        icon: "fa-solid fa-bowl-food",
        tag: "حامض ولذيذ"
    },
    {
        id: "kb-3",
        name: "كبة تمن مع مقبلات",
        price: 7000,
        category: "kubba",
        desc: "أقراص كبة الرز (التمن) الذهبية المقرمشة والمحشوة باللحم المفروم والبصل والبهارات، تقدم مع مقبلات مشكلة.",
        icon: "fa-solid fa-cubes",
        tag: "مقرمش"
    },
    {
        id: "kb-4",
        name: "عروق نانيتي بالتنور",
        price: 8000,
        category: "kubba",
        desc: "خبز العروق الموصلي المحشو باللحم والخضار والمخبوز في تنور الحطب الساخن.",
        icon: "fa-solid fa-bread-slice",
        tag: "خبز تنور"
    },
    {
        id: "kb-5",
        name: "كبة طرابلسية مع مقبلات",
        price: 7000,
        category: "kubba",
        desc: "كبة برغل مقلية ذات قوام مقرمش ومحشوة باللحم والمكسرات بنكهة شامية مميزة مع مقبلات.",
        icon: "fa-solid fa-circle",
        tag: "شامي"
    },
    {
        id: "kb-6",
        name: "قوزي وبلاو لحم غنم",
        price: 15000,
        category: "kubba",
        desc: "عجينة القوزي الذهبية المقرمشة (البردة بلاو) المحشوة بلحم الغنم الطري، الرز البسمتي، البطاطا المقلية، والبازلاء.",
        icon: "fa-solid fa-box",
        tag: "طبق ملكي"
    },
    {
        id: "kb-7",
        name: "قوزي وبلاو دجاج",
        price: 12000,
        category: "kubba",
        desc: "عجينة البردة بلاو المحشوة بقطع صدر الدجاج المتبل، الرز الفاخر، البطاطا المقرمشة والتوابل.",
        icon: "fa-solid fa-box",
        tag: "رائع جداً"
    },
    {
        id: "kb-8",
        name: "بورك لحم",
        price: 5000,
        category: "kubba",
        desc: "رقائق العجين المقرمشة والمحشوة بلحم الغنم المفروم والبصل والبهارات المقلية بعناية.",
        icon: "fa-solid fa-scroll",
        tag: "مقبلات ساخنة"
    },

    // 3. وجبات الغداء - دولمة
    {
        id: "dm-1",
        name: "دولمة قدر صغير",
        price: 16000,
        category: "lunch",
        desc: "قدر دولمة عراقية مشكلة (بصل، ورق عنب، سلق، باذنجان) مطبوخة بضلوع لحم الغنم وحموضة أصلية تكفي لشخصين.",
        icon: "fa-solid fa-bowl-food",
        tag: "حامض حلو"
    },
    {
        id: "dm-2",
        name: "دولمة قدر وسط",
        price: 25000,
        category: "lunch",
        desc: "قدر دولمة عراقية مشكلة مع ضلع الغنم الفاخر والليمون الحامض، يكفي لعائلة صغيرة.",
        icon: "fa-solid fa-bowl-food",
        tag: "شغل بيت"
    },
    {
        id: "dm-3",
        name: "دولمة قدر كبير",
        price: 35000,
        category: "lunch",
        desc: "قدر دولمة نانيتي التراثي الكبير الغني بضلوع اللحم واللية الفاخرة للجمعات العائلية.",
        icon: "fa-solid fa-bowl-food",
        tag: "للجمعات"
    },
    {
        id: "dm-4",
        name: "ورق عنب ست البيت",
        price: 0,
        category: "lunch",
        desc: "ورق عنب محشو بالرز والتوابل الحامضة مطبوخ بعناية فائقة (الطلب يتم حسب الوزن/الكمية).",
        icon: "fa-solid fa-leaf",
        tag: "حسب الطلب"
    },
    {
        id: "dm-5",
        name: "ملفوف لهانة ست البيت",
        price: 0,
        category: "lunch",
        desc: "ملفوف لهانة (كرنب) محشو بالرز المتبل واللحم، مطبوخ بالثوم والليمون ذائب ولذيذ (حسب الطلب).",
        icon: "fa-solid fa-leaf",
        tag: "حسب الطلب"
    },
    {
        id: "dm-6",
        name: "دولمة كوردي باللبن (1 نفر)",
        price: 8000,
        category: "lunch",
        desc: "الدولمة الكردية الأصيلة المحشوة والمطبوخة بمرق اللبن الرائب الغني والمميز.",
        icon: "fa-solid fa-bowl-food",
        tag: "تراث كردي"
    },
    {
        id: "dm-7",
        name: "كشكك كوردي (1 نفر)",
        price: 8000,
        category: "lunch",
        desc: "طبق الكشكك التراثي المصنوع من القمح المقشور واللحم المهروس مع السمن البلدي الساخن.",
        icon: "fa-solid fa-whiskey-glass",
        tag: "شعبي"
    },

    // 4. مقلوبة لحم غنم
    {
        id: "mq-1",
        name: "مقلوبة قدر صغير",
        price: 20000,
        category: "maqluba",
        desc: "مقلوبة لحم غنم طازج مع الباذنجان والبطاطا والطماطم والرز المتبل بخلطة نانيتي الخاصة.",
        icon: "fa-solid fa-layer-group",
        tag: "تراثية"
    },
    {
        id: "mq-2",
        name: "مقلوبة قدر وسط",
        price: 30000,
        category: "maqluba",
        desc: "مقلوبة عراقية أصلية باللحم والخضار المقلي، مرتبة بشكل فني وشهي يكفي العائلة.",
        icon: "fa-solid fa-layer-group",
        tag: "أكثر مبيعاً"
    },
    {
        id: "mq-3",
        name: "مقلوبة قدر كبير",
        price: 45000,
        category: "maqluba",
        desc: "وليمة مقلوبة لحم غنم بالخضار والرز المبهر الفاخر للجمعات والعزائم الكبيرة.",
        icon: "fa-solid fa-layer-group",
        tag: "وليمة"
    },

    // 5. قوزي ومندي
    {
        id: "qz-1",
        name: "مندي لحم غنم (1 نفر)",
        price: 16000,
        category: "quzi_mandi",
        desc: "لحم غنم طري مطهو ببطء على البخار مع بهارات المندي ورز بسمتي مدخن بنكهة الجمر.",
        icon: "fa-solid fa-drumstick-bite",
        tag: "مدخن"
    },
    {
        id: "qz-2",
        name: "مندي دجاج (1 نفر)",
        price: 12000,
        category: "quzi_mandi",
        desc: "نصف دجاجة متبلة ومحمرة تقدم فوق رز المندي المدخن مع المكسرات والصلصة الحارة.",
        icon: "fa-solid fa-drumstick-bite",
        tag: "شهي"
    },
    {
        id: "qz-3",
        name: "قوزي الشام",
        price: 15000,
        category: "quzi_mandi",
        desc: "أوزي الشام بالرز واللحم والبازلاء والمكسرات مغلف بورق الجلاش الذهبي المقرمش.",
        icon: "fa-solid fa-sun",
        tag: "عربي"
    },
    {
        id: "qz-4",
        name: "قوزي لحم",
        price: 16000,
        category: "quzi_mandi",
        desc: "كتف لحم غنم محمر ذائب يقدم مع الرز المبهر، البرياني، الشعرية، المكسرات والرقاق العراقي.",
        icon: "fa-solid fa-meat",
        tag: "طبق اليوم"
    },
    {
        id: "qz-5",
        name: "تشريب لحم",
        price: 16000,
        category: "quzi_mandi",
        desc: "لحم غنم مسلوق مع البصل والتوابل الصفراء بمرق غني يسكب على الخبز العراقي الرقيق.",
        icon: "fa-solid fa-soup",
        tag: "تراثي دافئ"
    },
    {
        id: "qz-6",
        name: "برياني (خلطة دجاج + لحم)",
        price: 12000,
        category: "quzi_mandi",
        desc: "الرز البرياني العراقي العطِر بخلطة اللحم المفروم وقطع الدجاج والشعرية والبطاطا والمكسرات.",
        icon: "fa-solid fa-plate-wheat",
        tag: "مشكل"
    },
    {
        id: "qz-7",
        name: "برياني دجاج",
        price: 12000,
        category: "quzi_mandi",
        desc: "رز بسمتي مبهر بالهيل والقرفة مع قطع صدر الدجاج الطرية والمكسرات المحمصة.",
        icon: "fa-solid fa-plate-wheat",
        tag: "برياني"
    },
    {
        id: "qz-8",
        name: "تشريب قلية باب السراي",
        price: 12000,
        category: "quzi_mandi",
        desc: "تشريب القلية الموصلية الشهير بمرقها اللذيذ مع الخبز واللحم الطري.",
        icon: "fa-solid fa-soup",
        tag: "شعبي"
    },
    {
        id: "qz-9",
        name: "مسكوف كورد الأردني",
        price: 18000,
        category: "quzi_mandi",
        desc: "سمك أو لحم متبل بصلصة المسكوف على الطريقة الكردية والأردنية المبتكرة ومحمر بالفرن.",
        icon: "fa-solid fa-fish",
        tag: "نكهة مميزة"
    },
    {
        id: "qz-10",
        name: "شيخ محشي مع تمن",
        price: 12000,
        category: "quzi_mandi",
        desc: "كوسا وباذنجان محشوة باللحم المفروم والبصل ومطبوخة بصلصة الطماطم الغنية تقدم مع الرز (التمن).",
        icon: "fa-solid fa-bowl-rice",
        tag: "شغل بيت"
    },
    {
        id: "qz-11",
        name: "كص لحم (نفر)",
        price: 16000,
        category: "quzi_mandi",
        desc: "شاورما اللحم العراقية (الكص) المشوية على السيخ ببهاراتها الأصلية تقدم مع المخللات والخبز.",
        icon: "fa-solid fa-align-justify",
        tag: "كص عراقي"
    },
    {
        id: "qz-12",
        name: "شاورما دجاج (نفر)",
        price: 12000,
        category: "quzi_mandi",
        desc: "شاورما صدر الدجاج بتتبيلة الثوم والليمون تقدم مع المايونيز والبطاطا المقرمشة.",
        icon: "fa-solid fa-align-justify",
        tag: "شاورما دجاج"
    },

    // 6. وجبات السندويش
    {
        id: "sw-1",
        name: "صاج لحم",
        price: 4000,
        category: "sandwiches",
        desc: "خبز صاج عراقي رقيق محشو بكص اللحم المتبل الفاخر مع البصل والطماطم والمخلل.",
        icon: "fa-solid fa-bread-slice",
        tag: "صاج"
    },
    {
        id: "sw-2",
        name: "صاج دجاج",
        price: 3000,
        category: "sandwiches",
        desc: "سندويش صاج محشو بشاورما الدجاج بتتبيلة الثومية الشهية والبطاطا المقرمشة.",
        icon: "fa-solid fa-bread-slice",
        tag: "صاج"
    },
    {
        id: "sw-3",
        name: "فلافل شامية ماعون",
        price: 5000,
        category: "sandwiches",
        desc: "طبق فلافل شامية ذهبية مقرمشة تقدم مع الحمص بالطحينة، السلطة، المخللات والعمبة العراقية.",
        icon: "fa-solid fa-circle",
        tag: "ماعون شعبي"
    },
    {
        id: "sw-4",
        name: "صاج فلافل",
        price: 2500,
        category: "sandwiches",
        desc: "أقراص الفلافل المقرمشة والساخنة محشوة في خبز الصاج الطازج مع الخضار والعمبة.",
        icon: "fa-solid fa-bread-slice",
        tag: "سريع"
    },
    {
        id: "sw-5",
        name: "بركر لحم مع جبن",
        price: 7000,
        category: "sandwiches",
        desc: "قرص برغر لحم غنم مشوي محضر في المطعم مغطى بالجبنة الذائبة، الخس، الطماطم والصلصة الخاصة.",
        icon: "fa-solid fa-hamburger",
        tag: "برغر"
    },
    {
        id: "sw-6",
        name: "بركر لحم دبل مع جبن",
        price: 9000,
        category: "sandwiches",
        desc: "قطعتين برغر لحم مشويتين غنيتين بالجبنة والصلصة السرية لتجربة طعم خيالية.",
        icon: "fa-solid fa-hamburger",
        tag: "دبل برغر"
    },

    // 7. المقبلات الباردة
    {
        id: "ca-1",
        name: "حمص بطحينة",
        price: 3000,
        category: "cold_appetizers",
        desc: "حمص مسلوق ومهروس ناعم مع الطحينة والليمون وزيت الزيتون البكر.",
        icon: "fa-solid fa-seedling",
        tag: "بارد"
    },
    {
        id: "ca-2",
        name: "متبل باذنجان",
        price: 4000,
        category: "cold_appetizers",
        desc: "باذنجان مشوي ومهروس مع الطحينة والثوم واللبن وزيت الزيتون.",
        icon: "fa-solid fa-seedling",
        tag: "بارد"
    },
    {
        id: "ca-3",
        name: "بابا غنوج",
        price: 4000,
        category: "cold_appetizers",
        desc: "باذنجان مشوي مع الخضار المشكلة (طماطم، بصل، فلفل) ودبس الرمان والجوز.",
        icon: "fa-solid fa-seedling",
        tag: "بارد"
    },
    {
        id: "ca-4",
        name: "تبولة موصلية",
        price: 5000,
        category: "cold_appetizers",
        desc: "بقدونس مفروم ناعم مع البندورة والنعناع والبرغل الناعم وعصير الليمون والزيت.",
        icon: "fa-solid fa-leaf",
        tag: "سلطة"
    },
    {
        id: "ca-5",
        name: "فتوش دبس رمان",
        price: 5000,
        category: "cold_appetizers",
        desc: "خضار مشكلة طازجة مع قطع الخبز المقرمش المحمر ودبس الرمان والسماق.",
        icon: "fa-solid fa-leaf",
        tag: "سلطة"
    },
    {
        id: "ca-6",
        name: "جاجيك بالنعناع",
        price: 3000,
        category: "cold_appetizers",
        desc: "لبن زبادي طازج وخيار مبشور وثوم مفروم ونعناع مجفف مع زيت الزيتون.",
        icon: "fa-solid fa-droplet",
        tag: "منعش"
    },
    {
        id: "ca-7",
        name: "فتة حمص مع اللحم",
        price: 7000,
        category: "cold_appetizers",
        desc: "طبقات من الخبز المقرمش والحمص المسلوق وصلصة اللبن بالطحينة والثوم، مغطاة بلحم الغنم المقلي والمكسرات.",
        icon: "fa-solid fa-bowl-food",
        tag: "فتة"
    },
    {
        id: "ca-8",
        name: "فتة باذنجان مع اللحم",
        price: 7000,
        category: "cold_appetizers",
        desc: "باذنجان مقلي وخبز محمص ومرقة اللحم الرائعة وصلصة اللبن الغنية مع قطع لحم الغنم الفاخر.",
        icon: "fa-solid fa-bowl-food",
        tag: "فتة"
    },
    {
        id: "ca-9",
        name: "فتة مشكلة مع اللحم",
        price: 7000,
        category: "cold_appetizers",
        desc: "فتة غنية تجمع الحمص والباذنجان مع اللحم المفروم المقلي واللوز والصنوبر.",
        icon: "fa-solid fa-bowl-food",
        tag: "فتة مشكلة"
    },
    {
        id: "ca-10",
        name: "ماعون مقبلات مشكل صغير",
        price: 4000,
        category: "cold_appetizers",
        desc: "تشكيلة من حمص، متبل، بابا غنوج، تبولة، وفتوش بحجم صغير.",
        icon: "fa-solid fa-plate-wheat",
        tag: "مشكل"
    },
    {
        id: "ca-11",
        name: "ماعون مقبلات كبير",
        price: 7000,
        category: "cold_appetizers",
        desc: "تشكيلة كاملة ووافرة من المقبلات الباردة والشهية، مناسبة للمشاركة.",
        icon: "fa-solid fa-plate-wheat",
        tag: "مشكل كبير"
    },

    // 8. المقبلات الحارة
    {
        id: "ha-1",
        name: "بورك دجاج (عدد 5)",
        price: 5000,
        category: "hot_appetizers",
        desc: "أصابع البورك المقرمشة محشوة بصدور الدجاج المفرومة مع البصل والتوابل.",
        icon: "fa-solid fa-scroll",
        tag: "ساخن"
    },
    {
        id: "ha-2",
        name: "بورك جبن (عدد 5)",
        price: 5000,
        category: "hot_appetizers",
        desc: "أصابع البورك الذهبية المقرمشة محشوة بجبنة الموزاريلا والفيتا والنعناع البري.",
        icon: "fa-solid fa-scroll",
        tag: "ساخن"
    },
    {
        id: "ha-3",
        name: "بطاطا مشوية مع جبن",
        price: 4000,
        category: "hot_appetizers",
        desc: "حبات بطاطس كاملة مشوية بالفرن، مهروسة مع الزبدة وجبنة القشقوان والموزاريلا الذائبة.",
        icon: "fa-solid fa-circle",
        tag: "جبنة ذائبة"
    },
    {
        id: "ha-4",
        name: "بطاطا فنكر",
        price: 3000,
        category: "hot_appetizers",
        desc: "أصابع البطاطس المقلية المقرمشة والذهبية تقدم مع الكاتشب والمايونيز.",
        icon: "fa-solid fa-lines-leaning",
        tag: "كلاسيك"
    },
    {
        id: "ha-5",
        name: "بطاطا ودجز",
        price: 3000,
        category: "hot_appetizers",
        desc: "قطع بطاطس ودجز سميكة ومتبلة بالأعشاب البرية والمشوية بالفرن.",
        icon: "fa-solid fa-lines-leaning",
        tag: "بالأعشاب"
    },
    {
        id: "ha-6",
        name: "حمص باللحمة",
        price: 5000,
        category: "hot_appetizers",
        desc: "طبق الحمص بالطحينة الكلاسيكي تعلوه قطع لحم الغنم المحمرة بالسمن البلدي والمكسرات الساخنة.",
        icon: "fa-solid fa-bowl-food",
        tag: "فاخر"
    },
    {
        id: "ha-7",
        name: "معجنات متنوعة",
        price: 5000,
        category: "hot_appetizers",
        desc: "فطائر صغيرة مخبوزة بالفرن بحشوات مشكلة (لحم، جبن، زعتر).",
        icon: "fa-solid fa-cookie",
        tag: "معجنات"
    },

    // 9. وجبات غربية ودايت بوكس
    {
        id: "dw-1",
        name: "وجبة دايت بوكس",
        price: 6000,
        category: "diet_western",
        desc: "شاورما صدر دجاج مشوي بدون زيوت تقدم مع رز أسمر مبهر وخضروات سوتيه صحية ومغذية.",
        icon: "fa-solid fa-box-archive",
        tag: "صحي / دايت"
    },
    {
        id: "dw-2",
        name: "معكرونة بالبشاميل كبير",
        price: 7000,
        category: "diet_western",
        desc: "صينية معكرونة بالبشاميل غنية باللحم المفروم المتبل والصلصة البيضاء الكريمية والجبنة الذهبية.",
        icon: "fa-solid fa-sheet-plastic",
        tag: "بشاميل فاخر"
    },
    {
        id: "dw-3",
        name: "معكرونة بالبشاميل صغير",
        price: 5000,
        category: "diet_western",
        desc: "طبق معكرونة بشاميل لذيذ بحجم فردي.",
        icon: "fa-solid fa-sheet-plastic",
        tag: "فردي"
    },
    {
        id: "dw-4",
        name: "ريزو دجاج مقرمش",
        price: 6000,
        category: "diet_western",
        desc: "رز ريزو أصفر مبهر وحار، تعلوه قطع دجاج ستربس مقرمشة مع صلصة الريزو الخاصة.",
        icon: "fa-solid fa-bowl-rice",
        tag: "حار"
    },
    {
        id: "dw-5",
        name: "ريزو شاورما دجاج",
        price: 6000,
        category: "diet_western",
        desc: "رز الريزو الشهير مغطى بشاورما الدجاج المتبلة بالثوم وعصير الليمون والصلصات.",
        icon: "fa-solid fa-bowl-rice",
        tag: "جديد"
    },
    {
        id: "dw-6",
        name: "ريزو شاورما لحم",
        price: 8000,
        category: "diet_western",
        desc: "رز الريزو المميز مغطى بشرائح كص اللحم العراقي اللذيذ وصلصة الباربكيو والمايونيز الحار.",
        icon: "fa-solid fa-bowl-rice",
        tag: "جديد"
    },

    // 10. المناسف بأنواعها
    {
        id: "ms-1",
        name: "منسف مشكل دجاج + كص لحم (تكفي 4 أشخاص)",
        price: 30000,
        category: "mansaf",
        desc: "سدر رز منسف كبير مشكل، يعلوه دجاج محمر وشاورما لحم كص، مزين بالمكسرات والخبز الرقيق والصلصة الخاصة.",
        icon: "fa-solid fa-plate-wheat",
        tag: "عائلي"
    },
    {
        id: "ms-2",
        name: "منسف قوزي لحم (شخصي)",
        price: 30000,
        category: "mansaf",
        desc: "منسف أرز باللحم لشخص واحد، مطهو بجميد اللبن الساخن ومزين بالصنوبر واللوز المحمص.",
        icon: "fa-solid fa-plate-wheat",
        tag: "شخصي فاخر"
    },
    {
        id: "ms-3",
        name: "منسف قوزي لحم (4 أشخاص)",
        price: 60000,
        category: "mansaf",
        desc: "سدر منسف قوزي كبير يكفي 4 أشخاص، مع قطع لحم الغنم الكبيرة الفاخرة والجميد الأصلي والمكسرات.",
        icon: "fa-solid fa-plate-wheat",
        tag: "وليمة عائلية"
    },
    {
        id: "ms-4",
        name: "منسف لحم ودجاج (4 أشخاص)",
        price: 50000,
        category: "mansaf",
        desc: "سدر منسف عائلي مشكل بالدجاج المحمر الذهبي ولحم القوزي الطري المطهو باللبن والأرز الفاخر.",
        icon: "fa-solid fa-plate-wheat",
        tag: "وليمة مشكلة"
    },
    {
        id: "ms-5",
        name: "كلوج غنم مشوي بالفرن",
        price: 22000,
        category: "mansaf",
        desc: "ضلوع ورقبة غنم متبلة بالبهارات الموصلية العريقة ومشوية بالفرن ببطء حتى تذوب تماماً.",
        icon: "fa-solid fa-meat",
        tag: "مشوي فاخر"
    },
    {
        id: "ms-6",
        name: "سمك الميدان المقلي",
        price: 10000,
        category: "mansaf",
        desc: "سمك ميدان طازج متبل بالثوم والليمون والبهارات ومقلي مقرمش يقدم مع الخضار والرز.",
        icon: "fa-solid fa-fish",
        tag: "سمك طازج"
    },
    {
        id: "ms-7",
        name: "خروف محشي كامل",
        price: 500000,
        category: "mansaf",
        desc: "خروف بلدي كامل محشي بالرز البرياني والمكسرات واللحم المفروم ومشوي بالكامل بالفرن (يتطلب الحجز والطلب قبل يوم كامل).",
        icon: "fa-solid fa-cow",
        tag: "ولائم كبرى"
    },

    // 11. الحلويات
    {
        id: "sw-sweet1",
        name: "كنافة بالجبن",
        price: 5000,
        category: "sweets",
        desc: "كنافة نابلسية خشنة أو ناعمة بالجبن العكاوي الذائب والقطر الساخن والفستق الحلبي.",
        icon: "fa-solid fa-ice-cream",
        tag: "ساخنة"
    },
    {
        id: "sw-sweet2",
        name: "كنافة بالقشطة",
        price: 5000,
        category: "sweets",
        desc: "كنافة مقرمشة غنية بحشوة القشطة البلدية الفاخرة المحضرة يومياً.",
        icon: "fa-solid fa-ice-cream",
        tag: "لذيذة"
    },
    {
        id: "sw-sweet3",
        name: "كيك كاتو شيكولاته",
        price: 3000,
        category: "sweets",
        desc: "قطعة كيك كاتو اسفنجي غني بكريمة الشيكولاته اللذيذة ومزين بصوص الكاكاو.",
        icon: "fa-solid fa-cake-candles",
        tag: "كيك"
    },
    {
        id: "sw-sweet4",
        name: "كنافة نوتيلا وأوريو",
        price: 4000,
        category: "sweets",
        desc: "كنافة عصرية مدمجة بشيكولاته النوتيلا الفاخرة وحبيبات الأوريو المقرمشة.",
        icon: "fa-solid fa-ice-cream",
        tag: "عصرية"
    },
    {
        id: "sw-sweet5",
        name: "كاستر ست البيت",
        price: 2000,
        category: "sweets",
        desc: "كوب كاستر بارد ولذيذ محضر بالحليب والزعفران والهيل على طريقة الجدات.",
        icon: "fa-solid fa-bowl-food",
        tag: "بارد"
    },
    {
        id: "sw-sweet6",
        name: "محلبي بالهيل",
        price: 2000,
        category: "sweets",
        desc: "مهلبية الحليب والنشا وماء الورد والهيل العراقي مزينة بالفستق واللوز.",
        icon: "fa-solid fa-bowl-food",
        tag: "شعبي بارد"
    },
    {
        id: "sw-sweet7",
        name: "رز بالحليب",
        price: 3000,
        category: "sweets",
        desc: "أرز مطبوخ بالحليب المكثف والقشطة والهيل والقرنفل بارد وشهي.",
        icon: "fa-solid fa-bowl-rice",
        tag: "تراثي"
    },

    // 12. العصائر والمشروبات
    {
        id: "dr-1",
        name: "نومي بصرة بارد",
        price: 3000,
        category: "drinks",
        desc: "عصير الليمون الأسود (النومي بصرة) العراقي التراثي البارد والمنعش والمفيد جداً.",
        icon: "fa-solid fa-glass-water",
        tag: "أصيل"
    },
    {
        id: "dr-2",
        name: "ليمون ونعناع طبيعي",
        price: 4000,
        category: "drinks",
        desc: "عصير الليمون الطازج المعصور مع أوراق النعناع الخضراء والثلج المجروش.",
        icon: "fa-solid fa-lemon",
        tag: "منعش"
    },
    {
        id: "dr-3",
        name: "برتقال طبيعي معصور",
        price: 4000,
        category: "drinks",
        desc: "عصير برتقال طبيعي 100% غني بفيتامين C معصور فريش بدون إضافات.",
        icon: "fa-solid fa-glass-water",
        tag: "طبيعي"
    },
    {
        id: "dr-4",
        name: "فراولة طبيعي",
        price: 4000,
        category: "drinks",
        desc: "عصير الفراولة الطازج البارد اللذيذ المحلى بلمسة عسل.",
        icon: "fa-solid fa-glass-water",
        tag: "بارد"
    },
    {
        id: "dr-5",
        name: "كاكاو وعسل",
        price: 6000,
        category: "drinks",
        desc: "مشروب الكاكاو الغني بالحليب كامل الدسم والمحلى بعسل النحل الطبيعي.",
        icon: "fa-solid fa-mug-hot",
        tag: "دسم"
    },
    {
        id: "dr-6",
        name: "عصير مانكا (مانجو)",
        price: 6000,
        category: "drinks",
        desc: "عصير مانجو طبيعي ثخين وبارد مليء بقطع المانجو الطازجة.",
        icon: "fa-solid fa-glass-water",
        tag: "فاخر"
    },
    {
        id: "dr-7",
        name: "موز وحليب بالهيل",
        price: 4000,
        category: "drinks",
        desc: "مخفوق الموز الطازج بالحليب البارد ورشة هيل موصلية تمنحه نكهة مميزة.",
        icon: "fa-solid fa-glass-water",
        tag: "منعش"
    },
    {
        id: "dr-8",
        name: "كولا دايت",
        price: 1500,
        category: "drinks",
        desc: "علبة كولا دايت باردة ومنعشة خالية من السكر.",
        icon: "fa-solid fa-bottle-water",
        tag: "غازيات"
    },
    {
        id: "dr-9",
        name: "كولا كلاسيك",
        price: 1000,
        category: "drinks",
        desc: "علبة كولا كلاسيك باردة ولذيذة.",
        icon: "fa-solid fa-bottle-water",
        tag: "غازيات"
    },
    {
        id: "dr-10",
        name: "لبن غنم خومالي",
        price: 2000,
        category: "drinks",
        desc: "اللبن الرائب المصنوع من حليب الغنم البلدي الدسم والبارد بنكهة ونفس القرية الدافئة.",
        icon: "fa-solid fa-jug-detergent",
        tag: "بلدي دسم"
    }
];

// تصنيفات المنيو باللغتين للترجمة والتصفية
const categories = [
    { id: "all", name: "الكل" },
    { id: "breakfast", name: "الفطور الصباحي" },
    { id: "kubba", name: "كبب خاتون الموصل" },
    { id: "lunch", name: "وجبات الغداء (دولمة)" },
    { id: "maqluba", name: "مقلوبة لحم غنم" },
    { id: "quzi_mandi", name: "قوزي ومندي" },
    { id: "sandwiches", name: "السندويشات" },
    { id: "cold_appetizers", name: "المقبلات الباردة" },
    { id: "hot_appetizers", name: "المقبلات الحارة" },
    { id: "diet_western", name: "غربية ودايت" },
    { id: "mansaf", name: "المناسف ولائم" },
    { id: "sweets", name: "الحلويات" },
    { id: "drinks", name: "العصائر والمشروبات" }
];

// حالة السلة والموقع
let cart = [];
let currentCategory = "all";
let searchQuery = "";
let isMusicPlaying = false;

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    // تحميل السلة المخزنة سابقاً إن وجدت
    loadCartFromStorage();
    
    // توليد أزرار الأصناف
    renderCategories();
    
    // عرض وجبات الطعام
    renderMenu();
    
    // تفعيل البحث
    const searchInput = document.getElementById("menu-search");
    if(searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            renderMenu();
        });
    }

    // تفعيل تحريك أزرار الأصناف أفقياً بالماوس
    setupCategoryScroll();
});

// توليد التبويبات للأصناف
function renderCategories() {
    const container = document.getElementById("categories-container");
    if(!container) return;

    container.innerHTML = categories.map(cat => `
        <button class="category-tab ${cat.id === currentCategory ? 'active' : ''}" 
                onclick="filterCategory('${cat.id}')">
            ${cat.name}
        </button>
    `).join('');
}

// تصفية الأصناف
function filterCategory(catId) {
    currentCategory = catId;
    
    // تحديث التبويبات النشطة
    const tabs = document.querySelectorAll(".category-tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    
    // إيجاد التبويب الفعلي وتنشيطه
    const activeTab = Array.from(tabs).find(t => t.innerText.trim() === categories.find(c => c.id === catId).name.trim());
    if (activeTab) activeTab.classList.add("active");

    renderCategories(); // لإعادة التحميل الجمالي
    renderMenu();
}

// توليد الكروت وعرض وجبات الطعام في الشبكة
function renderMenu() {
    const grid = document.getElementById("menu-grid");
    const noResults = document.getElementById("no-results");
    if(!grid) return;

    // تصفية الوجبات بناء على الصنف والبحث
    const filtered = menuItems.filter(item => {
        const matchesCategory = currentCategory === "all" || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) || 
                              item.desc.toLowerCase().includes(searchQuery) ||
                              item.tag.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if(filtered.length === 0) {
        grid.innerHTML = "";
        noResults.classList.remove("hidden");
        return;
    }

    noResults.classList.add("hidden");

    grid.innerHTML = filtered.map(item => {
        // تنسيق السعر
        const formattedPrice = item.price > 0 
            ? `${item.price.toLocaleString('ar-IQ')} د.ع` 
            : "حسب الطلب";
        
        return `
            <div class="menu-card" data-category="${item.category}">
                <div class="menu-card-top">
                    <span class="food-badge ${item.category}">${categories.find(c => c.id === item.category).name}</span>
                    <i class="${item.icon} menu-card-icon"></i>
                    <span class="price-badge">${formattedPrice}</span>
                </div>
                <div class="menu-card-body">
                    <h3 class="menu-card-title">${item.name}</h3>
                    <p class="menu-card-desc">${item.desc}</p>
                    <span class="hero-badge" style="font-size: 0.75rem; margin-bottom: 10px; border-color: rgba(73,93,67,0.3); color: var(--color-secondary); align-self: flex-start; background: rgba(73,93,67,0.05);">
                        ${item.tag}
                    </span>
                    <div class="menu-card-footer">
                        <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                            إضافة للسلة <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// تحريك التبويبات باللمس أو أزرار الاتجاهات
function scrollCategories(amount) {
    const container = document.getElementById("categories-container");
    if(container) {
        container.scrollBy({ left: amount, behavior: 'smooth' });
    }
}

// تفعيل التحريك عند الضغط على أزرار الأسهم يمين ويسار
function setupCategoryScroll() {
    const leftBtn = document.getElementById("slide-left-btn");
    const rightBtn = document.getElementById("slide-right-btn");
    
    if(leftBtn) leftBtn.addEventListener("click", () => scrollCategories(-150));
    if(rightBtn) rightBtn.addEventListener("click", () => scrollCategories(150));
}

// إضافة وجبة للسلة
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if(!item) return;

    // التأكد من عدم وجود الوجبة مسبقاً
    const existing = cart.find(i => i.id === itemId);
    if(existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            qty: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    
    // تنبيه حركي لطيف على زر السلة
    const cartBtn = document.querySelector(".cart-toggle-btn");
    if(cartBtn) {
        cartBtn.classList.add("pulse-animation");
        setTimeout(() => cartBtn.classList.remove("pulse-animation"), 300);
    }
}

// تعديل الكميات داخل السلة
function changeQty(itemId, amount) {
    const item = cart.find(i => i.id === itemId);
    if(!item) return;

    item.qty += amount;
    if(item.qty <= 0) {
        // حذف إذا قلت الكمية عن 1
        cart = cart.filter(i => i.id !== itemId);
    }

    saveCartToStorage();
    updateCartUI();
}

// حذف عنصر بالكامل من السلة
function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    saveCartToStorage();
    updateCartUI();
}

// تحديث الواجهة الخاصة بالسلة
function updateCartUI() {
    const cartBody = document.getElementById("cart-body");
    const cartCount = document.getElementById("cart-count");
    const cartTotalVal = document.getElementById("cart-total-val");
    
    if(!cartBody) return;

    // تحديث شارة العدد الكلي للسلة
    const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);
    cartCount.innerText = totalItems;

    if(cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-utensils"></i>
                <p>سلتك فارغة حالياً. تصفح المنيو وأضف وجباتك المفضلة!</p>
            </div>
        `;
        cartTotalVal.innerText = "0 د.ع";
        return;
    }

    // حساب المجموع الكلي
    const totalSum = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    cartTotalVal.innerText = `${totalSum.toLocaleString('ar-IQ')} د.ع`;

    // توليد واجهة العناصر
    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${(item.price * item.qty).toLocaleString('ar-IQ')} د.ع</div>
            </div>
            <div class="cart-item-controls">
                <button class="cart-qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                <span class="cart-qty-val">${item.qty}</span>
                <button class="cart-qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')" title="إزالة">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// إظهار وإخفاء سلة المشتريات
function toggleCart() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if(drawer && overlay) {
        drawer.classList.toggle("open");
        overlay.classList.toggle("open");
    }
}

// حفظ السلة في التخزين المحلي للمتصفح
function saveCartToStorage() {
    localStorage.setItem("nanety_cart", JSON.stringify(cart));
}

// تحميل السلة من المتصفح
function loadCartFromStorage() {
    const stored = localStorage.getItem("nanety_cart");
    if(stored) {
        try {
            cart = JSON.parse(stored);
            updateCartUI();
        } catch(e) {
            cart = [];
        }
    }
}

// إرسال الطلب للواتساب الخاص بالمطعم
function sendWhatsAppOrder() {
    if(cart.length === 0) {
        alert("سلتك فارغة! يرجى إضافة وجباتك المفضلة للمنيو أولاً.");
        return;
    }

    const nameInput = document.getElementById("customer-name");
    const addressInput = document.getElementById("customer-address");
    const notesInput = document.getElementById("customer-notes");

    const name = nameInput ? nameInput.value.trim() : "";
    const address = addressInput ? addressInput.value.trim() : "";
    const notes = notesInput ? notesInput.value.trim() : "";

    if(!name || !address) {
        alert("يرجى ملء الاسم الكامل وعنوان التوصيل لإرسال طلبك بنجاح.");
        return;
    }

    // رقم هاتف مطبخ نانيتي الأساسي
    const phoneNumber = "9647511255522"; // 0751 12 555 22 الدولي

    // تركيب نص الرسالة التراثي الجميل
    let messageText = `مرحباً مطبخ نانيتي، أود تسجيل طلب جديد من الموقع التراثي 🌾\n\n`;
    messageText += `*الاسم الكريم:* ${name}\n`;
    messageText += `*العنوان/الاستلام:* ${address}\n`;
    
    if(notes) {
        messageText += `*ملاحظات الطلب:* ${notes}\n`;
    }
    
    messageText += `\n*تفاصيل الطلبيّة:*\n`;
    messageText += `-------------------------\n`;
    
    let totalSum = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        totalSum += itemTotal;
        messageText += `▪️ ${item.qty}x ${item.name} (${itemTotal.toLocaleString('ar-IQ')} د.ع)\n`;
    });
    
    messageText += `-------------------------\n`;
    messageText += `*المجموع الكلي للطلب:* ${totalSum.toLocaleString('ar-IQ')} د.ع\n\n`;
    messageText += `أرجو تأكيد استلام الطلب وتجهيزه وتحديد وقت التوصيل. شكراً لكم ولنفس الجدات الطيّب! ❤️`;

    // ترميز النص ليتوافق مع رابط الويب
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    // إفراغ السلة بعد الطلب
    cart = [];
    saveCartToStorage();
    updateCartUI();
    toggleCart();

    // مسح مدخلات الفورم
    if(nameInput) nameInput.value = "";
    if(addressInput) addressInput.value = "";
    if(notesInput) notesInput.value = "";

    // فتح تطبيق الواتساب مباشرة
    window.open(whatsappUrl, "_blank");
}

// تشغيل وإيقاف الصوت التراثي
function toggleMusic() {
    const audio = document.getElementById("bg-music");
    const musicIcon = document.getElementById("music-icon");
    if(!audio || !musicIcon) return;

    if(isMusicPlaying) {
        audio.pause();
        musicIcon.className = "fa-solid fa-music-slash";
        isMusicPlaying = false;
    } else {
        // تشغيل الصوت مع تعديل خيار التكرار ومستوى الصوت
        audio.volume = 0.3;
        audio.play().then(() => {
            musicIcon.className = "fa-solid fa-music fa-spin";
            isMusicPlaying = true;
        }).catch(err => {
            console.log("تعذر تشغيل الصوت تلقائياً بسبب سياسات المتصفح:", err);
            alert("يرجى النقر في أي مكان في الصفحة أولاً ثم النقر لتشغيل الموسيقى التراثية.");
        });
    }
}
