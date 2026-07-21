import {
  Stethoscope,
  Layers,
  Wand2,
  Sun,
  Smile,
  Gem,
  Activity,
  Crown,
  Sparkles,
  Scissors,
} from 'lucide-react'

export const clinic = {
  name: 'De Aura Dental Clinic',
  studioName: 'De Aura Dental Studio',
  category: 'Dentist, Cosmetic Dentist',
  location: '1st Floor, Hafsa Medical Complex, Adjacent to Bank Islami, Ghauri Town Phase 4-A, Islamabad, Pakistan',
  phone: '0333-9717487',
  phoneHref: '+923339717487',
  whatsappHref: '923339717487',
  email: 'arfaislam696@gmail.com',
  instagram: 'https://www.instagram.com/de_aura_dental_studio',
  facebook: 'https://www.facebook.com/p/De-Aura-Dental-Clinic-100076666454559/',
  reviews: 157,
  rating: 4.9,
  hours: [
    { day: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: 'By Appointment Only' },
  ],
}

export const doctors = [
  {
    name: 'Dr. Zeeshan Sadiq',
    role: 'BDS — Restorative & General Dentistry',
  },
  {
    name: 'Dr. Arifa Islam',
    role: 'Dentist',
  },
]

export const services = [
  {
    id: 'general-dentistry',
    icon: Stethoscope,
    title: 'General Dentistry',
    desc: 'Comprehensive checkups and preventive care to catch issues before they start.',
  },
  {
    id: 'restorative',
    icon: Layers,
    title: 'Restorative Dentistry',
    desc: 'Durable, natural-looking restorations that rebuild strength and function.',
  },
  {
    id: 'cosmetic',
    icon: Wand2,
    title: 'Cosmetic Dentistry',
    desc: 'Aesthetic refinements that elevate your smile\u2019s natural beauty, tailored to you.',
  },
  {
    id: 'whitening',
    icon: Sun,
    title: 'Teeth Whitening',
    desc: 'Safe, supervised whitening for a noticeably brighter smile in a single visit.',
  },
  {
    id: 'smile-makeover',
    icon: Smile,
    title: 'Smile Makeover',
    desc: 'A fully customised treatment plan that reshapes your smile around your facial harmony.',
  },
  {
    id: 'veneers',
    icon: Gem,
    title: 'Dental Veneers',
    desc: 'Ultra-thin, custom shells that correct shape, colour, and spacing instantly.',
  },
  {
    id: 'root-canal',
    icon: Activity,
    title: 'Root Canal Treatment',
    desc: 'Painless, precision root canal therapy that saves your natural tooth and stops the ache.',
  },
  {
    id: 'crowns',
    icon: Crown,
    title: 'Dental Crowns',
    desc: 'Custom-fitted crowns that protect and rebuild damaged or weakened teeth for the long term.',
  },
  {
    id: 'scaling',
    icon: Sparkles,
    title: 'Scaling & Polishing',
    desc: 'Gentle professional scaling and polishing that leaves your smile fresh and plaque-free.',
  },
  {
    id: 'extraction',
    icon: Scissors,
    title: 'Tooth Extraction',
    desc: 'Careful, minimally-invasive extractions, including wisdom tooth removal, done painlessly.',
  },
]

export const stats = [
  { value: 157, suffix: '+', label: 'Google Reviews' },
  { value: 4.9, suffix: '/5', label: 'Average Rating', decimals: 1 },
  { value: 2, suffix: '', label: 'Dedicated Dentists' },
  { value: 1000, suffix: '+', label: 'Smiles Treated' },
]

export const process = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'We listen first. A detailed discussion of your concerns, history, and smile goals.',
  },
  {
    step: '02',
    title: 'Diagnosis & Planning',
    desc: 'A thorough examination informs a treatment plan built around your case.',
  },
  {
    step: '03',
    title: 'Treatment',
    desc: 'Precise, gentle procedures using modern sterilised equipment and techniques.',
  },
  {
    step: '04',
    title: 'Aftercare & Follow-up',
    desc: 'Clear recovery guidance and scheduled reviews to make results last.',
  },
]

export const testimonials = [
  {
    name: 'Fatima Sheikh',
    location: 'Ghauri Town, Islamabad',
    rating: 5,
    text: 'Had a molar extraction and scaling done in the same visit — quick, gentle, and genuinely painless. The whole team made it easy.',
  },
  {
    name: 'Hamza Sheikh',
    location: 'Bahria Town, Islamabad',
    rating: 5,
    text: 'A friend of mine dealt with severe toothache for two years before finally getting it treated here. Wish he\u2019d come sooner — he\u2019s doing great now.',
  },
  {
    name: 'Mahnoor Iqbal',
    location: 'Phase 4-A, Ghauri Town',
    rating: 5,
    text: 'My extraction was completely smooth from start to finish. Everything was spotlessly clean and the whole process felt very reassuring.',
  },
  {
    name: 'Bilal Ahmed',
    location: 'Islamabad',
    rating: 5,
    text: 'Dr. Zeeshan and Dr. Arifa clearly know what they\u2019re doing — accurate diagnosis, honest advice, and treatment that doesn\u2019t cost the earth.',
  },
  {
    name: 'Sana Malik',
    location: 'Islamabad',
    rating: 5,
    text: 'Went in for a wisdom tooth removal expecting the worst. It was calm, controlled, and the sterilisation standards were obviously taken seriously.',
  },
]

export const faqs = [
  {
    q: 'Do I need to book an appointment in advance?',
    a: 'Yes, we recommend booking ahead through the form on this page, a WhatsApp message, or a phone call so we can reserve the right time slot for your treatment.',
  },
  {
    q: 'Is teeth whitening safe for sensitive teeth?',
    a: 'Absolutely. Our dentists assess your enamel and sensitivity levels first and adjust the whitening approach and strength accordingly.',
  },
  {
    q: 'How long does a root canal treatment take?',
    a: 'Most root canal treatments are completed in one to two visits of roughly 45–60 minutes each, depending on the tooth and condition.',
  },
  {
    q: 'Is tooth extraction painful?',
    a: 'Extractions, including wisdom tooth removal, are performed under proper anaesthesia with a calm, controlled approach — most patients describe the process as painless.',
  },
  {
    q: 'What is included in a scaling and polishing session?',
    a: 'A thorough professional cleaning that removes plaque and tartar buildup, followed by polishing to leave your teeth smooth and fresh.',
  },
  {
    q: 'Do you offer smile makeover consultations?',
    a: 'Yes, we offer a full smile makeover consultation to plan a treatment combination — veneers, whitening, or crowns — around your goals.',
  },
]

export const beforeAfter = [
  {
    title: 'Scaling & Polishing',
    before: 'Before scaling',
    after: 'After scaling',
    beforeImg: '/images/before-1.jpeg',
    afterImg: '/images/after-1.jpeg',
  },
  {
    title: 'Smile Makeover',
    before: 'Before treatment',
    after: 'After treatment',
    beforeImg: '/images/before-2.jpeg',
    afterImg: '/images/after-2.jpeg',
  },
  {
    title: 'Dental Crown',
    before: 'Before crown',
    after: 'After crown',
    beforeImg: '/images/before-3.jpeg',
    afterImg: '/images/after-3.jpeg',
  },
  {
    title: 'Crown & Restoration',
    before: 'Before restoration',
    after: 'After restoration',
    beforeImg: '/images/before-4.jpeg',
    afterImg: '/images/after-4.jpeg',
  },
]

export const galleryPhotos = [
  { src: '/images/gallery-1.jpeg', alt: 'Treatment room at De Aura Dental Clinic' },
  { src: '/images/gallery-2.jpeg', alt: 'Dental treatment in progress at De Aura Dental Clinic' },
]
