// Event Data with Online Images
const eventDetails = {
    'Paper Presentation': {
        desc: 'Each team is required to present their own interest / specialized topic in front of the judges. Papers can be presented in-person or online.',
        rules: [
            'Maximum of two members.',
            'Duration: 3 minutes for presentations and 2 minutes for discussion.'
        ],
        icon: 'fa-file-alt',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200'
    },
    'Poster Designing': {
        desc: 'Participants have to create visual compositions to communicate messages, information, or ideas effectively through printed posters. Posters can be presented in-person or online.',
        rules: [
            'The poster must be printed on an A3 or A4 sheet with their name and details.',
            'The poster must not represent any particular individual, organization, or brand name.'
        ],
        icon: 'fa-palette',
        image: 'images/poster_design_premium_banner_1773810543057.png'
    },
    'Byte Blitz': {
        desc: 'Participants develop and use cyber security tools to promote awareness of ethical and illegal hacking.',
        rules: [
            'Two participants per team',
            'Team members have to crack the code within a period of time.',
            'Time Duration 15 mins'
        ],
        icon: 'fa-shield-halved',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200'
    },
    'Tech Master': {
        desc: 'Participants have to talk on the given engineering topics which develop ability to design complex and structural solutions.',
        rules: [
            'Topic will be given on spot.',
            'Talk duration: 3-5 minutes.'
        ],
        icon: 'fa-laptop-code',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200'
    },
    'Code Transformation': {
        desc: 'Participants have to use their cognitive skills to analyze the presented problem and come up with a solution.',
        rules: [
            'Two participants per team.',
            'The participants should be able to execute C, C++, python and java.',
            'Within stipulated time provided code should be memorized and same to executed.',
            'Selected participants convert the code into language given by the jury.'
        ],
        icon: 'fa-code-compare',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200'
    },
    'Project Expo': {
        desc: 'Science models are visual representations of data about how things work with different technologies.',
        rules: [
            'A maximum of four members per team. Individual participation is also encouraged.',
            'Participants are asked to display their model and explain the concepts and principles.'
        ],
        icon: 'fa-lightbulb',
        image: 'images/project_expo_premium_banner_1773810512145.png'
    },
    'UI Prototype Modelling': {
        desc: 'To design a functional and user-friendly web page within a given domain.',
        rules: [
            'Only individual participation is allowed.',
            'Duration: 30 minutes.',
            'Make navigation trouble-free, user friendly, ensuring quick tracking of information.'
        ],
        icon: 'fa-object-group',
        image: 'images/ui_prototype_v2_premium_banner.png'
    },
    'Inno Pitch': {
        desc: 'Pitch your innovative startup ideas or unique solutions to a panel of expert judges. Demonstrate the real-world impact, feasibility, and market potential of your concept over a short presentation.',
        rules: [
            'Max 2 members per team.',
            '3–5 min presentation pitch.',
            '30 min preparation time before pitching.'
        ],
        icon: 'fa-bullhorn',
        image: 'images/inno_pitch_premium_banner_1773810496646.png'
    },
    'Glitch Groove': {
        desc: 'A dynamic video editing challenge where participants showcase their cutting-edge skills. Create a visually stunning, perfectly synced masterpiece within the given timeframe.',
        rules: [],
        icon: 'fa-video',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200'
    },
    'Micro Films': {
        desc: 'Tell a compelling story through the lens of a camera in just 3 to 5 minutes. Let your creativity shine as you write, direct, and edit your very own short film.',
        rules: [],
        icon: 'fa-film',
        image: 'images/micro_film_asthra_1773774984091.png'
    },
    'Meme Matrix': {
        desc: 'Unleash your humor and creativity in our meme-making contest! Participants will generate hilarious, culturally relevant, and highly shareable memes based on given prompts.',
        rules: [],
        icon: 'fa-face-laugh-squint',
        image: 'images/meme_matrix_asthra_1773775012115.png'
    },
    'Logo Maestro': {
        desc: 'Express brand essence and identity by designing a unique, memorable sequence of logos. Show off your vector art skills and out-of-the-box creative thinking.',
        rules: [],
        icon: 'fa-pen-nib',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200'
    },
    'Eco Snap': {
        desc: 'A nature-focused photography contest for individuals with a keen eye for ecological beauty. Capture the essence of the surrounding environment and showcase your photographic talent.',
        rules: [],
        icon: 'fa-camera',
        image: 'images/eco_snap_asthra_1773775029239.png'
    },
    'Tech Charades': {
        desc: 'A fun and interactive game of dumb charades with a special technical twist. Team members must act out complex tech terminologies without speaking while their team guesses.',
        rules: [],
        icon: 'fa-masks-theater',
        image: 'images/tech_charades_asthra_1773775050394.png'
    },
    'Artistry': {
        desc: 'An open canvas for traditional art forms like painting, sketching, and mehendi design. Let your imagination run wild and splash colors to reflect your inner artist.',
        rules: [],
        icon: 'fa-brush',
        image: 'images/artistry_asthra_1773775072154.png'
    },
    'Digital Dynamo': {
        desc: 'A spontaneous digital art and content creation challenge. Participants will use digital tools to quickly generate impressive artwork based on an abstract, surprise theme.',
        rules: [],
        icon: 'fa-bolt',
        image: 'images/digital_dynamo_asthra_1773775090836.png'
    },
    'Treasure Hunt': {
        desc: 'An exhilarating campus-wide race to solve cryptic clues and navigate secret challenges. Work together with your team to unlock mysteries and find the ultimate hidden prize.',
        rules: [],
        icon: 'fa-map-location-dot',
        image: 'images/treasure_hunt_asthra_1773775126291.png'
    },
    'Group Dance': {
        desc: 'Bring your energy and synchronized moves to the main stage in this thrilling group dance competition. Dazzle the audience with your choreography, expressions, and rhythm.',
        rules: [],
        icon: 'fa-users-viewfinder',
        image: 'images/group_dance_premium_v2_1773814008843.png'
    },
    'Singing': {
        desc: 'Soothe the crowd and impress the judges with your vocal prowess in solo or group performances. All musical genres are welcome as you hit the high notes on the big stage.',
        rules: [],
        icon: 'fa-music',
        image: 'images/singing_premium_v2_stage_1773814039491.png'
    },
    'Instrumentation': {
        desc: 'A pure musical showcase for instrumentalists to perform captivating, intricate melodies. No vocals allowed—just you, your instrument, and the magic of raw, acoustic or electric music.',
        rules: [],
        icon: 'fa-guitar',
        image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=1200'
    },
    'Fashion Runway': {
        desc: 'Walk the ramp with confidence and show off your unique style in our grand fashion pageant. Dress according to the themes and completely own the runway with your attitude and grace.',
        rules: [],
        icon: 'fa-shoe-prints',
        image: 'images/fashion_runway_premium_v2_1773814022975.png'
    },
    'Talentia': {
        desc: 'An open-stage opportunity for any unique, unusual, or extraordinary talents. Whether it\'s stand-up comedy, magic tricks, or beatboxing, this grand stage is yours to conquer.',
        rules: [],
        icon: 'fa-star',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Determine which event is being viewed based on URL Parameter
    const urlParams = new URLSearchParams(window.location.search);
    const eventName = urlParams.get('name');

    if (!eventName || !eventDetails[eventName]) {
        // Fallback for invalid or missing URLs
        document.getElementById('page-title').innerText = "Event Not Found";
        document.getElementById('page-heading').innerText = "Looks like you're lost.";
        document.getElementById('page-desc').innerText = "We couldn't find the event you were looking for. Please return to the Events page and try again.";
        return;
    }

    const data = eventDetails[eventName];

    // Populate Page Elements
    document.title = `${eventName} - ASTHRA`;
    document.getElementById('page-title').innerText = eventName;
    document.getElementById('page-heading').innerText = eventName;
    
    const iconEl = document.getElementById('page-icon');
    iconEl.className = 'fas'; // Reset classes
    if (data.icon) {
        iconEl.classList.add(data.icon);
    }
    
    document.getElementById('page-desc').innerText = data.desc;

    // Show Image
    if (data.image) {
        const imageEl = document.getElementById('page-image');
        imageEl.src = data.image;
        imageEl.style.display = 'block';
    }

    // Populate Rules (if any)
    const rulesContainer = document.getElementById('rules-section');
    const rulesList = document.getElementById('page-rules');
    
    if (data.rules && data.rules.length > 0) {
        rulesContainer.style.display = 'block';
        rulesList.innerHTML = data.rules.map(rule => `<li>${rule}</li>`).join('');
    } else {
        rulesContainer.style.display = 'none';
    }

    // Update Back button to remember the tab
    const tabParam = urlParams.get('tab');
    if (tabParam) {
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            backBtn.href = `index.html?tab=${tabParam}#events`;
        }
    }
});
