/**
 * RR Stud & Equestrian Academy (RR Stud Farm)
 * Central Configuration File
 *
 * All text, images, contact numbers, and academy details can be edited directly here.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
  suitableFor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Riding & Training' | 'Marwari Stud' | 'Academy Grounds' | 'Events & Shoots';
  image: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  isPlaceholder: boolean;
}

export const academyConfig = {
  brand: {
    name: 'RR Stud & Equestrian Academy',
    shortName: 'RR Stud Farm',
    tagline: 'Passion meets pedigree.',
    foundedLocation: 'Bhilwara, Rajasthan',
    themeColors: {
      deepBrown: '#4A3426',
      warmCream: '#F7F1E8',
      goldAccent: '#B8903D',
      charcoalText: '#241C18',
    },
  },

  contact: {
    contactPerson: 'Radhey Raman Vyas',
    chiefCoach: 'Silver Banna',
    phone: '8005511727',
    phoneFormatted: '+91 80055 11727',
    whatsappNumber: '918005511727',
    instagramHandle: '@radhey_raman_stud_farm_',
    instagramUrl: 'https://www.instagram.com/radhey_raman_stud_farm_/',
    address: 'NH 48 Bhilwara Highway, Dhullkheda, Bhilwara, Rajasthan',
    timings: 'Morning 6:00 AM – 10:00 AM · Evening 4:30 PM – 7:30 PM (Tuesday to Sunday)',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Dhullkheda+NH+48+Bhilwara+Highway+Rajasthan',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115822.4645229241!2d74.551978!3d25.347596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2363b652873%3A0x868b42e7bb0eef18!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714100000000!5m2!1sen!2sin',
  },

  hero: {
    headline: 'Passion Meets Pedigree',
    subtext: 'Bhilwara’s premier horse riding academy and Marwari stud farm. Experience authentic horsemanship, royal pedigree breeding, and disciplined riding instruction in Rajasthan.',
    image: '/src/assets/images/hero_stud_farm_1793110783845.jpg',
    ctaPrimary: 'Book a Trial Class',
    ctaSecondary: 'Call Now',
    keyPoints: [
      'Certified Equine Coaching',
      'Purebred Marwari Lineage',
      'Beginner to Advanced Batches',
    ],
  },

  about: {
    eyebrow: 'Our Heritage & Philosophy',
    title: 'Nurturing Equestrian Excellence in Rajasthan',
    paragraphs: [
      'RR Stud & Equestrian Academy (RR Stud Farm) is born out of an enduring love for horses and the timeless equestrian legacy of Mewar and Rajasthan.',
      'We are dedicated to preserving and championing the noble Marwari horse breed—renowned for their distinct inward-turning ears, indomitable spirit, and deep loyalty. From ethical breeding practices to meticulously maintained grounds, we treat every horse as family.',
      'Our academy welcomes riders of every background—from young children taking their tentative first trot to seasoned equestrians seeking deeper harmony in the saddle. We instill technical balance, equine empathy, and steadfast self-assurance.',
    ],
    values: [
      {
        title: 'Discipline',
        desc: 'Precision in saddle posture, calm command of rein and leg cues, and regular structured practice in the arena.',
      },
      {
        title: 'Care for Horses',
        desc: 'Nutrient-rich feed schedules, daily grooming, veterinary oversight, and compassionate handling always come first.',
      },
      {
        title: 'Confidence in Riders',
        desc: 'Overcoming hesitation to foster natural poise, focus, and quiet courage that extends well beyond the arena.',
      },
    ],
    featureImage: '/src/assets/images/marwari_stallion_pedigree_1793110811131.jpg',
  },

  services: [
    {
      id: 'riding-classes',
      title: 'Horse Riding Classes',
      shortDesc: 'Structured riding curriculum for kids, teens, and adults from basic mounting to independent cantering.',
      fullDesc: 'Step-by-step guidance starting from safety protocol, seat balance, walk, trot, canter, and arena navigation under personal supervision.',
      features: ['Batches for Kids, Teens & Adults', 'Weekend & Weekday Slots', 'Safety Helmets & Tack Provided', 'Progressive Skill Milestones'],
      icon: 'GraduationCap',
      suitableFor: 'Ages 6+ & all fitness levels',
    },
    {
      id: 'horse-training',
      title: 'Professional Horse Training',
      shortDesc: 'Comprehensive groundwork, behavioral desensitization, lunging, and arena manners for young or green horses.',
      fullDesc: 'Humane, patient conditioning that cultivates responsive, calm, and trustworthy horses ready for riding, shows, or personal ownership.',
      features: ['Despooking & Ground Manners', 'Lunge Line & Free Arena Work', 'Saddle & Bridle Acceptance', 'Behavioral Correction'],
      icon: 'Award',
      suitableFor: 'Horse owners & young equine stock',
    },
    {
      id: 'stud-breeding',
      title: 'Stud and Breeding',
      shortDesc: 'Preserving authentic Marwari horse bloodlines with exceptional conformation, beauty, and temperament.',
      fullDesc: 'Selective pedigree breeding focused on pure breed standards, characteristic lyre-shaped ears, strong bone structure, and proud Rajasthani carriage.',
      features: ['Purebred Marwari Lineage', 'Health & Conformation Checks', 'Professional Foaling Support', 'Pedigree Documentation Assistance'],
      icon: 'ShieldCheck',
      suitableFor: 'Breeding enthusiasts & equine owners',
    },
    {
      id: 'boarding-care',
      title: 'Horse Boarding & Care',
      shortDesc: 'Safe, well-ventilated stone stables with dedicated daily turnout, scientific nutrition, and round-the-clock grooming.',
      fullDesc: 'Give your equine companion the highest standard of living with clean bedding, premium quality hay and grains, daily paddock turnout, and prompt veterinary care.',
      features: ['Spacious Well-Aired Stables', 'Daily Exercise & Paddock Turnout', 'Tailored Nutrition Programs', 'Experienced Grooming Staff'],
      icon: 'Home',
      suitableFor: 'Private horse owners seeking livery',
    },
    {
      id: 'events-photoshoots',
      title: 'Events, Rides & Photoshoots',
      shortDesc: 'Stately horses and picturesque rustic Rajasthan settings for weddings, heritage film shoots, and countryside rides.',
      fullDesc: 'Make your special moments unforgettable with graceful horses in royal ceremonial tack or book an idyllic golden hour country ride.',
      features: ['Royal Wedding Entries', 'Pre-Wedding & Fashion Shoots', 'Scenic Countryside Trail Rides', 'Traditional Rajasthani Tack'],
      icon: 'Camera',
      suitableFor: 'Couples, photographers & event planners',
    },
  ] as ServiceItem[],

  whyChooseUs: [
    {
      title: 'Experienced Coaching',
      description: 'Under the mentorship of Chief Coach Silver Banna, learn time-tested techniques with utmost patience and safety.',
    },
    {
      title: 'Safe & Well-Trained Horses',
      description: 'Our horses are gentle, bombproofed, and habituated to riders of every skill level, ensuring reassuring first rides.',
    },
    {
      title: 'Spacious Open-Air Arena',
      description: 'A large, cushioned sand arena on the highway outskirts, providing clean desert air, unobstructed sightlines, and ample room.',
    },
    {
      title: 'Individual Attention',
      description: 'We keep our training sessions intentionally focused, ensuring that every rider receives direct, corrective feedback.',
    },
    {
      title: 'Noble Marwari Heritage',
      description: 'Experience the majesty of Rajasthan’s indigenous breed known for distinctive inward ears, courage, and stamina.',
    },
    {
      title: 'Active Outdoor Growth',
      description: 'Horse riding builds core physical strength, sharp balance, empathy, and mental tranquility away from digital distractions.',
    },
  ],

  coach: {
    name: 'Silver Banna',
    designation: 'Chief Coach & Equine Trainer',
    intro: 'A prominent equine advocate, master horse trainer, and seasoned riding instructor widely respected across Rajasthan for his dedication to horsemanship and Marwari horse welfare.',
    bio: [
      'With years of immersive experience handling, training, and breeding horses, Silver Banna approaches equestrian education with deep empathy and uncompromising safety discipline.',
      'His training method focuses on building a genuine partnership between rider and horse. Under his eye, beginners quickly overcome their initial fear, gaining fluid balance and intuitive control.',
    ],
    quote: 'Riding is never about exerting force over an animal. It is an honest dialogue of balance, patience, and mutual respect.',
    credentialsNote: '[Coach Profile & Background Info Verified with RR Stud Farm]',
    image: '',
  },

  gallery: [
    {
      id: 'g-1',
      title: 'Purebred Marwari Stallion',
      category: 'Marwari Stud',
      image: '/src/assets/images/marwari_stallion_pedigree_1793110811131.jpg',
      caption: 'Exemplary Marwari stallion showcasing regal carriage, inward-curving ears, and traditional Rajasthani harness.',
    },
    {
      id: 'g-2',
      title: 'Golden Hour Arena Gallop',
      category: 'Riding & Training',
      image: '/src/assets/images/hero_stud_farm_1793110783845.jpg',
      caption: 'Dynamic riding practice in our open sand arena with the warm hues of the Rajasthan evening.',
    },
    {
      id: 'g-3',
      title: 'Structured Riding Lesson',
      category: 'Riding & Training',
      image: '/src/assets/images/gallery_riding_lesson_1793110786456.jpg',
      caption: 'Dedicated instructor guiding student posture, seat balance, and rein contact during morning training.',
    },
    {
      id: 'g-4',
      title: 'Heritage Stables & Tack Room',
      category: 'Academy Grounds',
      image: '/src/assets/images/gallery_stud_stable_1793110786230.jpg',
      caption: 'Clean, airy stone stables equipped with quality English and traditional riding saddles.',
    },
    {
      id: 'g-5',
      title: 'Paddock Turnout & Conditioning',
      category: 'Academy Grounds',
      image: '/src/assets/images/marwari_stallion_pedigree_1793110811131.jpg',
      caption: 'Daily conditioning and open paddock exercise in the fresh morning breeze of Bhilwara.',
    },
    {
      id: 'g-6',
      title: 'Events & Ceremonial Horses',
      category: 'Events & Shoots',
      image: '/src/assets/images/hero_stud_farm_1793110783845.jpg',
      caption: 'Stately horses prepared for wedding entries, heritage photography, and film shoots.',
    },
  ] as GalleryItem[],

  testimonials: [
    {
      id: 't-1',
      quote: 'Learning riding under Silver Banna sir gave my 12-year-old son tremendous posture, courage, and calmness. The horses are extremely well-cared for and peaceful.',
      author: 'Rajendra Singh Ranawat',
      role: 'Parent of Academy Student',
      location: 'Bhilwara',
      rating: 5,
      isPlaceholder: true,
    },
    {
      id: 't-2',
      quote: 'The Marwari bloodlines at RR Stud Farm are true Rajasthani royalty. Their ear curves, temper, and bone conformation are maintained with immense dedication by Radhey Raman ji and team.',
      author: 'Vikramaditya Bhati',
      role: 'Equine Enthusiast & Horse Breeder',
      location: 'Rajasthan',
      rating: 5,
      isPlaceholder: true,
    },
    {
      id: 't-3',
      quote: 'I joined as an adult beginner who had never sat on a horse before. The trainers were patient, ensuring zero rush and complete safety. It is my favorite weekend escape.',
      author: 'Priya Sharma',
      role: 'Weekend Riding Enthusiast',
      location: 'Bhilwara',
      rating: 5,
      isPlaceholder: true,
    },
  ] as TestimonialItem[],

  bookingOptions: {
    ageGroups: [
      { id: 'kids', label: 'Kids (Ages 6 – 12)' },
      { id: 'teens', label: 'Teens (Ages 13 – 18)' },
      { id: 'adults', label: 'Adults (Ages 19+)' },
    ],
    experienceLevels: [
      { id: 'beginner', label: 'Complete Beginner (First time)' },
      { id: 'intermediate', label: 'Intermediate (Can trot / basic control)' },
      { id: 'advanced', label: 'Advanced (Experienced rider)' },
    ],
    preferredTimes: [
      { id: 'morning', label: 'Morning Batch (6:00 AM – 9:00 AM)' },
      { id: 'evening', label: 'Evening Batch (4:30 PM – 7:00 PM)' },
      { id: 'flexible', label: 'Flexible / Weekend' },
    ],
    serviceTypes: [
      'Horse Riding Trial Class',
      'Regular Monthly Riding Program',
      'Horse Training Consultation',
      'Stud & Breeding Inquiry',
      'Horse Boarding & Livery',
      'Photoshoot / Event Booking',
    ],
  },
};
