import type {
  BlogType,
  CourseResumeType,
  EventScheduleType,
  FreeCoursesType,
  NoticeBoardType,
  NotificationType,
  OurProgramsType,
  OurStatsType,
  PlayListType,
  PopularArticlesType,
  PricingType,
  ReviewType,
  SpecialCoursesType,
  StudentType,
  TestimonialsType,
  TestimonialType,
} from '@/types/other'
import { addOrSubtractDaysFromDate, addOrSubtractHoursFromDate } from '@/utils/date'

import popularArticle1 from '@/assets/images/popular-articles/popular-articles-1.jpg'
import popularArticle2 from '@/assets/images/popular-articles/popular-articles-2.jpg'
import popularArticle3 from '@/assets/images/popular-articles/popular-articles-3.jpg'
import popularArticle4 from '@/assets/images/popular-articles/popular-articles-4.jpg'
import popularArticle5 from '@/assets/images/popular-articles/popular-articles-5.jpg'
import popularArticle6 from '@/assets/images/popular-articles/popular-articles-6.jpg'
import popularArticle7 from '@/assets/images/popular-articles/popular-articles-7.jpg'
import popularArticle8 from '@/assets/images/popular-articles/popular-articles-8.jpg'
import popularArticle9 from '@/assets/images/popular-articles/popular-articles-9.jpg'

import testimonials1 from '@/assets/images/testimonials/testimonial-1.jpeg'
import testimonials2 from '@/assets/images/testimonials/testimonial-2.jpg'
import testimonials3 from '@/assets/images/testimonials/testimonial-3.jpg'
import testimonials4 from '@/assets/images/testimonials/testimonial-4.jpg'
import testimonials5 from '@/assets/images/testimonials/testimonial-5.jpg'
import testimonials6 from '@/assets/images/testimonials/testimonial-6.jpg'

import ourStats5 from '@/assets/images/stats/certificate.json'
import ourStats3 from '@/assets/images/stats/confidence-up.json'
import ourStats1 from '@/assets/images/stats/kid-reading.json'
import ourStats2 from '@/assets/images/stats/shake-hands.json'
import ourStats4 from '@/assets/images/stats/students.json'

import ourPrograms1 from '@/assets/images/virtual-courses/our-programs/our-programs-slide-1.png'
import ourPrograms2 from '@/assets/images/virtual-courses/our-programs/our-programs-slide-2.jpg'
import ourPrograms3 from '@/assets/images/virtual-courses/our-programs/our-programs-slide-3.jpg'
import ourPrograms4 from '@/assets/images/virtual-courses/our-programs/our-programs-slide-4.jpg'
import ourPrograms5 from '@/assets/images/virtual-courses/our-programs/our-programs-slide-5.jpg'
import ourPrograms6 from '@/assets/images/virtual-courses/our-programs/our-programs-slide-6.jpg'

import specialCourses1 from '@/assets/images/virtual-courses/special-courses/special-courses-slide-1.jpg'
import specialCourses2 from '@/assets/images/virtual-courses/special-courses/special-courses-slide-2.jpg'
import specialCourses3 from '@/assets/images/virtual-courses/special-courses/special-courses-slide-3.jpg'
import specialCourses4 from '@/assets/images/virtual-courses/special-courses/special-courses-slide-4.jpg'
import specialCourses5 from '@/assets/images/virtual-courses/special-courses/special-courses-slide-5.jpg'
import specialCourses6 from '@/assets/images/virtual-courses/special-courses/special-courses-slide-6.jpeg'

import freeCourses1 from '@/assets/images/virtual-courses/free-courses/free-courses-slide-1.jpg'
import freeCourses2 from '@/assets/images/virtual-courses/free-courses/free-courses-slide-2.jpg'
import freeCourses3 from '@/assets/images/virtual-courses/free-courses/free-courses-slide-3.jpg'
import freeCourses4 from '@/assets/images/virtual-courses/free-courses/free-courses-slide-4.jpg'
import freeCourses5 from '@/assets/images/virtual-courses/free-courses/free-courses-slide-5.jpg'
import freeCourses6 from '@/assets/images/virtual-courses/free-courses/free-courses-slide-6.jpg'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

import event2 from '@/assets/images/event/02.jpg'
import event3 from '@/assets/images/event/03.jpg'
import event4 from '@/assets/images/event/04.jpg'
import event5 from '@/assets/images/event/05.jpg'
import event6 from '@/assets/images/event/06.jpg'
import event7 from '@/assets/images/event/07.jpg'
import event8 from '@/assets/images/event/08.jpg'
import event9 from '@/assets/images/event/09.jpg'
import { BsPatchCheckFill, BsXOctagonFill } from 'react-icons/bs'
import { FaBook, FaBookOpen, FaGlobe, FaUserTie } from 'react-icons/fa'

export const popularArticlesData: PopularArticlesType[] = [
  {
    description: 'Learn how to create a productive study environment, manage your time wisely, and stay motivated while learning from home.',
    duration: 5,
    image: popularArticle1,
    title: 'How to Make the Most of Virtual Learning at Home',
  },
  {
    description: 'From flashcard makers to homework helpers, here are ten awesome free tools that can level up your learning.',
    duration: 15,
    image: popularArticle2,
    title: 'Top 10 Free Tools Every Student Should Know About',
  },
  {
    description: 'Discover practical strategies for balancing schoolwork, hobbies, and rest so you never feel overwhelmed.',
    duration: 6,
    image: popularArticle3,
    title: 'Mastering Time Management as a Student',
  },
  {
    description: 'A sneak peek into the exclusive courses offered only to HFSE International School students on VizSchool.',
    duration: 7,
    image: popularArticle4,
    title: 'What’s Inside an HFSE Special Course?',
  },
  {
    description: 'Explore how games and interactivity help boost student engagement and performance.',
    duration: 12,
    image: popularArticle5,
    title: 'Gamified Learning: Why It Works (And How We Do It)',
  },
  {
    description: ' Step-by-step instructions on completing courses and showcasing your achievements with official VizSchool certificates.',
    duration: 18,
    image: popularArticle6,
    title: 'How to Earn and Share Your Certificates on VizSchool',
  },
  {
    description: 'Tips for studying smarter, avoiding distractions, and staying calm during online tests.',
    duration: 25,
    image: popularArticle7,
    title: 'The Best Ways to Prepare for an Online Quiz',
  },
  {
    description: 'Everything parents need to know about helping their child succeed in a virtual learning environment.',
    duration: 7,
    image: popularArticle8,
    title: `Parent's Guide to Supporting Your Child on VizSchool`,
  },
  {
    description: 'Meet the team and discover how VizSchool was built to support modern learners and align with the HFSE vision.',
    duration: 5,
    image: popularArticle9,
    title: 'Behind the Scenes: Building VizSchool with Students in Mind',
  },
]

export const testimonialsData: TestimonialsType[] = [
  {
    image: testimonials1,
    name: 'Maria D.',
    status: 'Parent of a Grade 7 Student',
    testimony: `'VizSchool has been an amazing addition to my child’s education. The virtual classes and interactive lessons keep her engaged, and she’s learning skills beyond the regular school curriculum. The certificates she earns motivate her to keep going!'`,
  },
  {
    image: testimonials2,
    name: 'Ethan L.',
    status: 'Grade 8 Student',
    testimony: `"I love learning on VizSchool! The lessons are fun, and I can go at my own pace. I took a coding course and now I can build my own website! The best part is earning certificates after finishing a course!"`,
  },
  {
    image: testimonials3,
    name: 'Jonathan R.',
    status: 'Parent of a Grade 9 Student',
    testimony: `"As a busy parent, I love that my son can take extra courses at his own pace. VizSchool’s virtual classrooms and recorded lessons make learning so flexible. He’s even developed a new interest in digital art!"`,
  },
  {
    image: testimonials4,
    name: 'Samantha P.',
    status: 'Grade 6 Student',
    testimony: `"The virtual classrooms are amazing because I get to ask questions and interact with teachers. The lessons feel personal, and I never feel left behind. Plus, getting a certificate at the end makes me proud of my progress!"`,
  },
  {
    image: testimonials5,
    name: 'Elaine W.',
    status: 'Parent of a Grade 5 Student',
    testimony: `"VizSchool isn’t just another online learning platform—it’s a second school that helps my child grow beyond what’s taught in class. The extra courses have boosted her confidence in public speaking and math!"`,
  },
  {
    image: testimonials6,
    name: 'Joshua M.',
    status: 'Grade 10 Student',
    testimony: `"I used to think learning outside of school was boring, but VizSchool changed my mind! The lessons are interactive, and I can even see my progress. I just completed my first leadership course, and it was awesome!"`,
  },
]

export const ourStatsData: OurStatsType[] = [
  {
    description: 'Students explore new skills',
    icon: ourStats1,
    stats: '95%',
  },
  {
    description: 'Parents value the flexibility',
    icon: ourStats2,
    stats: '9 out of 10',
  },
  {
    description: 'Students feel more confident',
    icon: ourStats3,
    stats: '85%',
  },
  {
    description: 'Students take multiple courses',
    icon: ourStats4,
    stats: '4 out of 5',
  },
  {
    description: 'Students earn certificates',
    icon: ourStats5,
    stats: '100%',
  },
]

export const ourProgramsData: OurProgramsType[] = [
  {
    courseTitle: 'English Proficiency & Literature',
    image: ourPrograms1,
    instructor: 'Ms. Sarah Doe',
  },
  {
    courseTitle: 'Mathematics Mastery',
    image: ourPrograms2,
    instructor: 'Ms. Jane Doe',
  },
  {
    courseTitle: 'Science Explorer (Physics, Chemistry, Biology)',
    image: ourPrograms3,
    instructor: 'Mr. John Doe',
  },
  {
    courseTitle: 'Global History & Social Studies',
    image: ourPrograms4,
    instructor: 'Ms. Sarah Doe',
  },
  {
    courseTitle: 'Chinese Language Mastery (HCL & CL)',
    image: ourPrograms5,
    instructor: 'Ms. Jane Doe',
  },
  {
    courseTitle: 'O-Level Express Science Bundle',
    image: ourPrograms6,
    instructor: 'Mr. John Doe',
  },
]

export const specialCoursesData: SpecialCoursesType[] = [
  {
    courseTitle: 'Young Innovators: STEM & Robotics',
    image: specialCourses1,
    instructor: 'Ms. Sarah Doe',
  },
  {
    courseTitle: 'Global Leadership & Public Speaking',
    image: specialCourses2,
    instructor: 'Ms. Jane Doe',
  },
  {
    courseTitle: 'Creative Digital Arts & Animation',
    image: specialCourses3,
    instructor: 'Mr. John Doe',
  },
  {
    courseTitle: 'Creative Writing & Storytelling',
    image: specialCourses4,
    instructor: 'Ms. Sarah Doe',
  },
  {
    courseTitle: 'Advanced Robotics & Engineering',
    image: specialCourses5,
    instructor: 'Ms. Jane Doe',
  },
  {
    courseTitle: 'Public Speaking & Debate Mastery',
    image: specialCourses6,
    instructor: 'Mr. John Doe',
  },
]

export const freeCoursesData: FreeCoursesType[] = [
  {
    courseTitle: 'Basic Coding for Beginners',
    image: freeCourses1,
    instructor: 'Ms. Sarah Doe',
  },
  {
    courseTitle: 'Financial Literacy for Kids & Teens',
    image: freeCourses2,
    instructor: 'Ms. Jane Doe',
  },
  {
    courseTitle: 'Environmental Awareness & Sustainability',
    image: freeCourses3,
    instructor: 'Mr. John Doe',
  },
  {
    courseTitle: 'Digital Art & Animation Basics',
    image: freeCourses4,
    instructor: 'Ms. Sarah Doe',
  },
  {
    courseTitle: 'Critical Thinking & Problem-Solving',
    image: freeCourses5,
    instructor: 'Ms. Jane Doe',
  },
  {
    courseTitle: 'Singapore History & Cultural Studies',
    image: freeCourses6,
    instructor: 'Mr. John Doe',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    id: '301',
    courseId: '1',
    description: 'Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing',
    role: 'Backend developer at google',
  },
  {
    id: '302',
    courseId: '2',
    description: 'Its enjoyment Moonlight newspaper up agreeable depending. Timed voice share led him to widen. At weddings believed laughing',
    role: 'Backend developer at google',
  },
  {
    id: '303',
    courseId: '3',
    description: 'Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing',
    role: 'Backend developer at google',
  },
  {
    id: '304',
    courseId: '4',
    description: 'Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing',
    role: 'Backend developer at google',
  },
]

export const userReviewData: ReviewType[] = [
  {
    name: 'Jacqueline Miller',
    rating: 4,
    time: addOrSubtractDaysFromDate(2),
    avatar: avatar9,
    description:
      'Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.',
    reply: [
      {
        name: 'Louis Ferguson',
        time: addOrSubtractDaysFromDate(1),
        avatar: avatar2,
        description:
          'Water timed folly right aware if oh truth. Imprudence attachment him for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything.',
      },
    ],
  },
  {
    name: 'Dennis Barrett',
    rating: 4,
    time: addOrSubtractDaysFromDate(2),
    avatar: avatar7,
    description:
      'Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.',
  },
]

export const playListData: PlayListType[] = [
  {
    title: 'Introduction of Digital Marketing',
    lectures: [
      {
        title: 'Introduction',
        time: '2m 10s',
        isNote: true,
      },
      {
        title: 'What is Digital Marketing What is Digital Marketing',
        time: 'Playing',
        playing: true,
        isNote: true,
      },
      {
        title: 'Type of Digital Marketing',
        time: '18m 10s',
      },
    ],
  },
  {
    title: 'Customer Life cycle',
    lectures: [
      {
        title: 'Introduction',
        time: '2m 10s',
      },
      {
        title: 'What is Digital Marketing What is Digital Marketing',
        time: '15m 10s',
      },
      {
        title: 'Type of Digital Marketing',
        time: '18m 10s',
        isPremium: true,
      },
    ],
  },
  {
    title: 'What is Search Engine Optimization(SEO)',
    lectures: [
      {
        title: 'Introduction',
        time: '2m 10s',
      },
      {
        title: 'How to SEO Optimise Your Homepage',
        time: '15m 00s',
      },
      {
        title: 'How to Write Title Tags Search Engines Love',
        time: '28m 10s',
      },
      {
        title: 'SEO Keyword Planning',
        time: '38m 22s',
        isPremium: true,
      },
      {
        title: 'Internal and External Links',
        time: '12m 10s',
        isPremium: true,
      },
      {
        title: 'Measuring SEO Effectiveness',
        time: '35m 10s',
        isPremium: true,
      },
    ],
  },
  {
    title: 'YouTube Marketing',
    lectures: [
      {
        title: 'Video Flow',
        time: '25m 5s',
      },
      {
        title: 'Webmaster Tool',
        time: '15m 20s',
      },
      {
        title: 'Featured Contents on Channel',
        time: '32m 20s',
      },
      {
        title: 'Managing Comments',
        time: '20m 20s',
        isPremium: true,
      },
      {
        title: 'Channel Analytics',
        time: '18m 20s',
        isPremium: true,
      },
    ],
  },
  {
    title: 'Why SEO',
    lectures: [
      {
        title: 'Understanding SEO',
        time: '20m 20s',
      },
      {
        title: 'On-Page SEO',
        time: '5m 20s',
      },
      {
        title: 'Local SEO',
        time: '16m 20s',
      },
      {
        title: 'Measuring SEO Effectiveness',
        time: '12m 20s',
        isPremium: true,
      },
      {
        title: 'SEO Keyword Planning',
        time: '36m 12s',
        isPremium: true,
      },
      {
        title: 'Keywords in Blog and Articles',
        time: '15m 20s',
        isPremium: true,
      },
      {
        title: 'Mobile SEO',
        time: '15m 00s',
        isPremium: true,
      },
    ],
  },
  {
    title: 'Google tag manager',
    lectures: [
      {
        title: 'G+ Pages Ranks Higher',
        time: '20m 20s',
      },
      {
        title: 'Adding Contact Links',
        time: '5m 20s',
      },
      {
        title: 'Google Hangouts',
        time: '16m 20s',
      },
      {
        title: 'Google Local Business',
        time: '36m 12s',
        isPremium: true,
      },
    ],
  },
  {
    title: 'Integration with Website',
    lectures: [
      {
        title: 'Creating LinkedIn Account',
        time: '13m 20s',
      },
      {
        title: 'Advance Searching',
        time: '31m 20s',
      },
      {
        title: 'LinkedIn Mobile App',
        time: '25m 20s',
      },
    ],
  },
]

export const blogsData: BlogType[] = [
  {
    id: '1001',
    title: 'Student Loan Survey: Many Owe $50K-plus',
    description:
      'Affronting imprudence do he he everything. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.',
    name: 'Frances Guerrero',
    createdAt: '30M Ago',
    category: {
      name: 'Student life',
      variant: 'danger',
    },
    image: event2,
  },
  {
    id: '1002',
    title: 'How to make a college list',
    description:
      'Prospective students should start broadly and then narrow their list down to colleges that best fit their needs, experts say. Yet remarkably appearance get him his projection.',
    name: 'Louis Crawford',
    createdAt: '12H Ago',
    category: {
      name: 'Student life',
      variant: 'success',
    },
    image: event8,
  },
  {
    id: '1003',
    title: 'Never underestimate the influence of Eduport',
    description: 'Prospective students should start broadly and then narrow their list',
    name: 'Joan Wallace',
    createdAt: '5D Ago',
    category: {
      name: 'Travel',
      variant: 'purple',
    },
    image: event9,
  },
  {
    id: '1004',
    title: 'Covid-19 and the college experienced',
    description: 'Rooms oh fully taken by worse do. Points afraid but may end law. Points afraid but may end law.',
    name: 'Amanda Reed',
    createdAt: 'July 21, 2021',
    category: {
      name: 'Research',
      variant: 'danger',
    },
    image: event3,
  },
  {
    id: '1005',
    title: 'Best Pinterest Boards for learning about business',
    description: 'Fully taken by worse do. Points afraid but may end law. Points afraid but may end law.',
    name: 'Samuel Bishop',
    createdAt: '40D ago',
    category: {
      name: 'Research',
      variant: 'success',
    },
    image: event7,
  },
  {
    id: '1006',
    title: 'The Olympics are over, now what?',
    description: 'Rooms oh fully taken by worse do. Points afraid but may end law. Points afraid but may end law.',
    name: 'Carolyn Ortiz',
    createdAt: 'Aug 31, 2021',
    category: {
      name: 'Sports',
      variant: 'primary',
    },
    image: event4,
  },
  {
    id: '1007',
    title: 'Campus Support for First-Year Students',
    description: 'Prospective students should start broadly and then narrow their list',
    name: 'Lori Stevens',
    createdAt: '3M Ago',
    category: {
      name: 'Student story',
      variant: 'info',
    },
    image: event5,
  },
  {
    id: '1008',
    title: 'Bad habits that people in the industry need to quit',
    description: 'Prospective students should start broadly and then narrow their list',
    name: 'Louis Crawford',
    createdAt: '10D Ago',
    category: {
      name: 'Marketing',
      variant: 'orange',
    },
    image: event6,
  },
]

export const pricingPlans: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        badge: 'Most popular',
        title: 'Basic',
        price: 20,
        features: [
          { icon: BsPatchCheckFill, variant: 'success', name: 'Up to 05 users monthly' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Free 5 host & domain' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Custom infrastructure' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Access to all our room' },
          { icon: BsXOctagonFill, variant: 'danger', name: '24/7 dedicated Support' },
          { icon: BsXOctagonFill, variant: 'danger', name: 'Unlimited updates' },
          { icon: BsXOctagonFill, variant: 'danger', name: 'Landing pages & Web widgets' },
        ],
      },
      {
        title: 'Professional',
        isRecommended: true,
        price: 59,
        features: [
          { icon: BsPatchCheckFill, variant: 'success', name: 'Up to 05 users monthly' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Free 5 host & domain' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Custom infrastructure' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Access to all our room' },
          { icon: BsPatchCheckFill, variant: 'success', name: '24/7 dedicated Support' },
          { icon: BsXOctagonFill, variant: 'danger', name: 'Unlimited updates' },
          { icon: BsXOctagonFill, variant: 'danger', name: 'Landing pages & Web widgets' },
        ],
      },
      {
        badge: 'Best value',
        title: 'Premium',
        price: 99,
        features: [
          { icon: BsPatchCheckFill, variant: 'success', name: 'Up to 05 users monthly' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Free 5 host & domain' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Custom infrastructure' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Access to all our room' },
          { icon: BsPatchCheckFill, variant: 'success', name: '24/7 dedicated Support' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Unlimited updates' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Landing pages & Web widgets' },
        ],
      },
    ],
  },
  {
    duration: 'year',
    plans: [
      {
        badge: 'Most popular',
        title: 'Basic',
        price: 570,
        features: [
          { icon: BsPatchCheckFill, variant: 'success', name: 'Up to 05 users monthly' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Free 5 host & domain' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Custom infrastructure' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Access to all our room' },
          { icon: BsXOctagonFill, variant: 'danger', name: '24/7 dedicated Support' },
          { icon: BsXOctagonFill, variant: 'danger', name: 'Unlimited updates' },
          { icon: BsXOctagonFill, variant: 'danger', name: 'Landing pages & Web widgets' },
        ],
      },
      {
        title: 'Professional',
        isRecommended: true,
        price: 840,
        features: [
          { icon: BsPatchCheckFill, variant: 'success', name: 'Up to 05 users monthly' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Free 5 host & domain' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Custom infrastructure' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Access to all our room' },
          { icon: BsPatchCheckFill, variant: 'success', name: '24/7 dedicated Support' },
          { icon: BsXOctagonFill, variant: 'danger', name: 'Unlimited updates' },
          { icon: BsXOctagonFill, variant: 'danger', name: 'Landing pages & Web widgets' },
        ],
      },
      {
        badge: 'Best value',
        title: 'Premium',
        price: 999,
        features: [
          { icon: BsPatchCheckFill, variant: 'success', name: 'Up to 05 users monthly' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Free 5 host & domain' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Custom infrastructure' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Access to all our room' },
          { icon: BsPatchCheckFill, variant: 'success', name: '24/7 dedicated Support' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Unlimited updates' },
          { icon: BsPatchCheckFill, variant: 'success', name: 'Landing pages & Web widgets' },
        ],
      },
    ],
  },
]

export const studentReviewData: ReviewType[] = [
  {
    id: '01',
    avatar: avatar1,
    description:
      'Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    name: 'Frances Guerrero',
    time: addOrSubtractDaysFromDate(2),
    rating: 4,
    reviewOn: 'How to implement sitemap on sass',
    courseName: 'Building Scalable APIs with GraphQL',
  },
  {
    id: '02',
    avatar: avatar3,
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    name: 'Louis Ferguson',
    time: addOrSubtractDaysFromDate(4),
    rating: 3,
    reviewOn: 'How does an Angular application work?',
    courseName: 'Graphic Design Masterclass',
  },
  {
    id: '03',
    avatar: avatar5,
    description:
      'Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    name: 'Carolyn Ortiz',
    time: addOrSubtractDaysFromDate(10),
    rating: 4,
    reviewOn: 'What is Flexbox and describe any elaborate on its most used properties??',
    courseName: 'Deep Learning with React-Native',
  },
  {
    id: '04',
    avatar: avatar8,
    description:
      'Chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    name: 'Dennis Barrett',
    time: addOrSubtractDaysFromDate(3),
    rating: 4,
    reviewOn: 'What are the different data types present in javascript?',
    courseName: 'Bootstrap 5 From Scratch',
  },
  {
    id: '05',
    avatar: avatar9,
    description:
      'Chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    name: 'Carolyn Ortiz',
    time: addOrSubtractDaysFromDate(8),
    rating: 4,
    reviewOn: 'What are object prototypes?',
    courseName: 'Learn Invision',
  },
  {
    id: '06',
    avatar: avatar3,
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    name: 'Louis Ferguson',
    time: addOrSubtractDaysFromDate(4),
    rating: 3,
    reviewOn: 'How does an Angular application work?',
    courseName: 'Graphic Design Masterclass',
  },
  {
    id: '07',
    avatar: avatar1,
    description:
      'Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    name: 'Frances Guerrero',
    time: addOrSubtractDaysFromDate(2),
    rating: 4,
    reviewOn: 'How to implement sitemap on sass',
    courseName: 'Building Scalable APIs with GraphQL',
  },
  {
    id: '08',
    avatar: avatar8,
    description:
      'Chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.',
    name: 'Dennis Barrett',
    time: addOrSubtractDaysFromDate(3),
    rating: 4,
    reviewOn: 'What are the different data types present in javascript?',
    courseName: 'Bootstrap 5 From Scratch',
  },
]

export const courseResumeData: CourseResumeType[] = [
  {
    id: '901',
    courseId: '1',
    playlist: [
      {
        title: 'Introduction of Digital Marketing',
        lectures: [
          {
            title: 'Introduction',
            time: '2m 10s',
            isNote: true,
          },
          {
            title: 'What is Digital Marketing What is Digital Marketing',
            time: 'Playing',
            isNote: true,
          },
          {
            title: 'Type of Digital Marketing',
            time: '18m 10s',
          },
        ],
      },
      {
        title: 'Customer Life cycle',
        lectures: [
          {
            title: 'Introduction',
            time: '2m 10s',
          },
          {
            title: 'What is Digital Marketing What is Digital Marketing',
            time: '15m 10s',
          },
          {
            title: 'Type of Digital Marketing',
            time: '18m 10s',
            isPremium: true,
          },
        ],
      },
    ],
  },
  {
    id: '902',
    courseId: '2',
    playlist: [
      {
        title: 'Introduction of Sketch',
        lectures: [
          {
            title: 'Introduction',
            time: '2m 10s',
            isNote: true,
          },
          {
            title: 'What is Digital Marketing What is Digital Marketing',
            time: '15m 10s',
          },
          {
            title: 'Type of Digital Marketing',
            time: '18m 10s',
          },
        ],
      },
      {
        title: 'YouTube Marketing',
        lectures: [
          {
            title: 'Video Flow',
            time: '25m 5s',
          },
          {
            title: 'Webmaster Tool',
            time: '15m 20s',
          },
          {
            title: 'Featured Contents on Channel',
            time: '32m 20s',
          },
          {
            title: 'Managing Comments',
            time: '20m 20s',
            isPremium: true,
          },
          {
            title: 'Channel Analytics',
            time: '18m 20s',
            isPremium: true,
          },
        ],
      },
    ],
  },
]

export const noticeBoard: NoticeBoardType[] = [
  {
    title: 'Join New Instructor',
    description: 'Amongst moments do in arrived Fat weddings believed prospect',
    time: addOrSubtractHoursFromDate(8),
    icon: FaUserTie,
    variant: 'purple',
  },
  {
    title: 'Update New Course',
    description: 'Arrived Fat weddings believed prospect',
    time: addOrSubtractHoursFromDate(8),
    icon: FaBookOpen,
    variant: 'orange',
  },
  {
    title: 'Update Syllabus',
    description: 'Arrived Fat weddings believed prospect',
    time: addOrSubtractHoursFromDate(8),
    icon: FaBook,
    variant: 'info',
  },
  {
    title: 'Update New Feature',
    description: 'Arrived Fat weddings believed prospect',
    time: addOrSubtractHoursFromDate(8),
    icon: FaGlobe,
    variant: 'danger',
  },
]

export const studentData: StudentType[] = [
  {
    id: '700',
    courseId: '1',
    location: 'mumbai',
    payments: 6205,
    progress: 85,
    totalCourse: 21,
  },
  {
    id: '701',
    courseId: '2',
    location: 'Delhi',
    payments: 1256,
    progress: 60,
    totalCourse: 16,
  },
  {
    id: '703',
    courseId: '3',
    location: 'New york',
    payments: 9256,
    progress: 74,
    totalCourse: 38,
  },
  {
    id: '700',
    courseId: '1',
    location: 'California',
    payments: 10688,
    progress: 45,
    totalCourse: 38,
  },
  {
    id: '700',
    courseId: '1',
    location: 'Chennai',
    payments: 856,
    progress: 90,
    totalCourse: 5,
  },
  {
    id: '700',
    courseId: '1',
    location: 'Canada',
    payments: 3578,
    progress: 30,
    totalCourse: 14,
  },
]

export const eventScheduleData: EventScheduleType[] = [
  {
    id: '1',
    day: addOrSubtractDaysFromDate(10),
    events: [
      {
        avatar: avatar1,
        title: 'Grad Opening',
        description: 'by Lori Stevens Chairman of Eduport',
        time: addOrSubtractHoursFromDate(1),
      },
      {
        avatar: avatar2,
        title: 'The Modern Engineering Methods',
        description: 'by Billy Vasquez Partner Startup',
        time: addOrSubtractHoursFromDate(4),
        isCoffeeBreak: true,
      },
      {
        avatar: avatar4,
        title: 'Evolution of User Experience',
        description: 'by Larry Lawson Co-founder and Carolyn Ortiz Eduport Director',
        time: addOrSubtractHoursFromDate(7),
      },
      {
        avatar: avatar6,
        title: 'Responsive Web Applications',
        description: 'by Jacqueline Miller Head Engineer',
        time: addOrSubtractHoursFromDate(2),
      },
    ],
  },
  {
    id: '2',
    day: addOrSubtractDaysFromDate(4),
    events: [
      {
        avatar: avatar3,
        title: 'Autonomous Vehicles',
        description: 'Billy Vasquez Chairman of wizixo',
        time: addOrSubtractHoursFromDate(2),
      },
      {
        avatar: avatar5,
        title: 'Global Innovations in Media',
        description: 'Lori Stevens VP Design wizixo',
        time: addOrSubtractHoursFromDate(4),
        isCoffeeBreak: true,
      },
      {
        avatar: avatar6,
        title: 'Value and Building Blocks ',
        description: 'Frances Guerrero</a> Co-founder wizixo',
        time: addOrSubtractHoursFromDate(8),
        isLunchBreak: true,
      },
      {
        avatar: avatar8,
        title: 'The Digital Economy',
        description: 'Louis Ferguson Web Technologist',
        time: addOrSubtractHoursFromDate(10),
      },
    ],
  },
  {
    id: '3',
    day: addOrSubtractDaysFromDate(8),
    events: [
      {
        avatar: avatar3,
        title: 'Autonomous Vehicles',
        description: 'Billy Vasquez Chairman of wizixo',
        time: addOrSubtractHoursFromDate(7),
      },
      {
        avatar: avatar5,
        title: 'Global Innovations in Media ',
        description: 'Lori Stevens VP Design wizixo',
        time: addOrSubtractHoursFromDate(8),
        isCoffeeBreak: true,
      },
      {
        avatar: avatar6,
        title: 'Value and Building Blocks',
        description: 'Frances Guerrero</a> Co-founder wizixo',
        time: addOrSubtractHoursFromDate(5),
        isLunchBreak: true,
      },
      {
        avatar: avatar8,
        title: 'The Digital Economy',
        description: 'Louis Ferguson Web Technologist',
        time: addOrSubtractHoursFromDate(25),
      },
    ],
  },
  {
    id: '4',
    day: addOrSubtractDaysFromDate(9),
    events: [
      {
        avatar: avatar1,
        title: 'Grad Opening',
        description: 'by Lori Stevens Chairman of Eduport',
        time: addOrSubtractHoursFromDate(5),
      },
      {
        avatar: avatar2,
        title: 'The Modern Engineering Methods',
        description: 'by Billy Vasquez Partner Startup',
        time: addOrSubtractHoursFromDate(3),
        isCoffeeBreak: true,
      },
      {
        avatar: avatar4,
        title: 'Evolution of User Experience',
        description: 'by Larry Lawson Co-founder and Carolyn Ortiz Eduport Director',
        time: addOrSubtractHoursFromDate(11),
      },
      {
        avatar: avatar6,
        title: 'Responsive Web Applications',
        description: 'by Jacqueline Miller Head Engineer',
        time: addOrSubtractHoursFromDate(20),
      },
    ],
  },
]

export const notificationData: NotificationType[] = [
  {
    image: avatar8,
    title: 'New request to apply for Instructor',
    description: 'Congratulate Joan Wallace for graduating from Microverse university',
    isDetails: true,
  },
  {
    image: avatar2,
    title: 'Larry Lawson Added a new course',
    description: "What's new! Find out about new features",
    isDetails: true,
  },
  {
    image: avatar5,
    title: 'New request to apply for Instructor',
    description: 'Congratulate Joan Wallace for graduating from Microverse university',
    isDetails: true,
  },
  {
    image: avatar3,
    title: 'Update v2.3 completed successfully',
    description: "What's new! Find out about new features",
    isTime: true,
  },
]
