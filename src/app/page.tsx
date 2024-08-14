import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";

const events = [
  { title: "Welcome and Introduction", time: "6:00 PM - 7:00 PM", date: "Seprember 4" },
  { title: "Dinner (We order together.)", time: "7:00 PM - 8:00 PM", date: "Seprember 4" },
  { title: "Game night, Relaxed get-together", time: "8:00 PM - 10:00 PM", date: "Seprember 4" },

  { title: "Arrival and Welcome Champagne/Juice Reception Opening Ceremony", time: "10:00 AM - 11:30 AM", date: "Seprember 5" },
  { title: "German Crash Course", name: "David Allen Martin II", time: "11:30 AM - 12:30 AM", date: "Seprember 5" },
  { title: "German Rally", name: "Schirin Hoppe", time: "12:30 PM - 14:00 PM", date: "Seprember 5" },
  { title: "Lunch", time: "2:00 PM - 3:00 PM", date: "Seprember 5" },
  { title: "Free Time (Networking, Learning German, Filming, Working, Exercising, etc.)", time: "3:00 PM - 5:00 PM", date: "Seprember 5" },
  { title: "Beer Tasting", time: "5:00 PM - 7:00 PM", date: "Seprember 5" },
  { title: "German Dinner", time: "7:00 PM - 8:00 PM", date: "Seprember 5" },
  { title: "Campfire with Bread on a Stick", time: "8:00 PM - 10:00 PM", date: "Seprember 5" },

  { title: "Crash-Course / Lecture", time: "10:00 AM - 11:00 AM", date: "Seprember 6" },
  { title: "Learn how to read Russian", name: "Ira", time: "11:00 AM - 12:00 PM", date: "Seprember 6" },
  { title: "Portuguese crash course ", name: "Leo", time: "12:00 PM - 1:00 PM", date: "Seprember 6" },
  { title: "Turkish cooking workshop (20€)", time: "12:00 PM - 2:00 PM", date: "Seprember 6" },
  { title: "Chinese crash course", name: "David Allen Martin II", time: "13:00 PM - 2:00 PM", date: "Seprember 6" },
  { title: "Lunch (Turkish Buffet)", time: "2:00 PM - 4:00 PM", date: "Seprember 6" },
  { title: "Portuguese Lecture", name: "Leo", time: "4:00 PM - 5:00 PM", date: "Seprember 6" },
  { title: "Lecture TBD", name: "TBD", time: "5:00 PM - 6:00 PM", date: "Seprember 6" },
  { title: "Lecture TBD", name: "TBD", time: "6:00 PM - 7:00 PM", date: "Seprember 6" },
  { title: "Turkish Dinner", time: "7:00 PM - 8:00 PM", date: "Seprember 6" },
  { title: "Pub Crawl", time: "8:00 PM - 10:00 PM", date: "Seprember 6" },

  { title: "Spanish crash course", name: "David Allen Martin II", time: "10:00 AM - 11:00 AM", date: "Seprember 7" },
  { title: "Digital Business", name: "Jair Martinez", time: "11:00 AM - 12:00 AM", date: "Seprember 7" },
  { title: "Pitch your Project", time: "12:00 PM - 1:00 PM", date: "Seprember 7" },
  { title: "Brainstorming & Mastermind Tables", time: "1:00 PM - 2:00 PM", date: "Seprember 7" },
  { title: "Tandem Tables", time: "1:00 PM - 2:00 PM", date: "Seprember 7" },
  { title: "Lunch", time: "2:00 PM - 3:00 PM", date: "Seprember 7" },
  { title: "Lecture TBD", name: "TBD", time: "3:00 PM - 4:00 PM", date: "Seprember 7" },
  { title: "Lecture TBD", name: "TBD", time: "4:00 PM - 5:00 PM", date: "Seprember 7" },
  { title: "Lecture Anja from Alemania???", name: "Anja", time: "5:00 PM - 6:00 PM", date: "Seprember 7" },
  { title: "Venezuellan Specialties", time: "6:00 PM - 8:00 PM", date: "Seprember 7" },
  { title: "Bachata Workshop with Follow-up Party", time: "8:00 PM - 10:00 PM", date: "Seprember 7" },

  { title: "Shared Breakfast (10€) and Networking", time: "10:00 AM - 12:00 PM", date: "Seprember 8" },
  { title: "Acro Yoga Workshop", time: "12:00 PM - 1:00 PM", date: "Seprember 8" },
  { title: "Circus Workshop", time: "1:00 PM - 3:00 PM", date: "Seprember 8" },
  { title: "Dragon Boat Race (15€)", time: "3:00 PM - 6:00 PM", date: "Seprember 8" },
  { title: "Barbecue", time: "3:00 PM - 7:00 PM", date: "Seprember 8" },
  { title: "Dinner Pizza", time: "7:00 PM - 8:00 PM", date: "Seprember 8" },
  { title: "Movie Night", time: "8:00 PM - 10:00 PM", date: "Seprember 8" },
  { title: "Karaoke", time: "8:00 PM - 10:00 PM", date: "Seprember 8" },
  { title: "Closing Ceremony", time: "10:00 PM ", date: "Seprember 8" },

]
const speakers = events.filter(event => event?.name).map(event => event.name!);
const uniqueSpeakers = Array.from(new Set(speakers));
console.log(uniqueSpeakers);




const faqs = [
  {
    question: "Where is the event located?",
    answer: "The event is held at a beautifully preserved historic train station, located just 30 minutes by public transport from the center of Osnabrück. The venue is surrounded by picturesque landscapes and a nearby river, providing a tranquil and inspiring atmosphere. The adress is: Am Eversburger Bahnhof 2 https://maps.app.goo.gl/7aEFAebzjBffhLDL8"
  },
  {
    question: "What food and beverages are available?",
    answer: "A variety of beverages, including Fanta, cola, sprite, juices, beer, and water, are available in a large refrigerator. You can help yourself anytime and make a payment into a piggy bank provided for your convenience. For meals, both lunch and dinner are offered with a selection of meat and vegetarian dishes, all included in the event package."
  },
  {
    question: "Is accommodation provided?",
    answer: "Accommodation is not included in the event package, but there are plenty of affordable options available nearby. Additionally, we provide space for tents, caravans, and motorhomes. Shower facilities are also available on-site for your convenience."
  },
  {
    question: "What activities and programs are included in the event?",
    answer: `The event features a diverse lineup of activities and programs, including: Speakers and Presentations, Pitches and Mastermind Sessions, Networking Opportunities, Workshops, Sports Activities, Dragon Boat Race, German Crash Course, Party, Bonfire.`
  },
  {
    question: "How can I participate in sports activities?",
    answer: "Sports activities like Bachata dancing, Acro Yoga, bouldering, and the Dragon Boat Race are open to all participants (fee may apply)."
  },
  {
    question: "Is the event suitable for beginners in German language learning?",
    answer: "Yes, the event includes a German Crash Course designed to accelerate your language learning, making it suitable for beginners."
  },
  {
    question: "What should I bring if I plan to camp?",
    answer: "If you plan to camp, bring your tent, caravan, or motorhome. We provide space and shower facilities for your convenience."
  },
  {
    question: "What is the evening entertainment like?",
    answer: "In the evening, enjoy a cozy bonfire with captivating performances and music from our DJ. It’s a perfect way to relax and connect with other attendees."
  },
  {
    question: "How do I get to the venue from Osnabrück?",
    answer: "The venue is a 30-minute journey by public transport from the center of Osnabrück, making it easily accessible."
  }
];


export default function Home() {
  return (
    <div className="flex w-full flex-col bg-white">
      <header className="relative z-50 flex-none lg:pt-11">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
          <div className="mt-10 lg:mt-0 lg:grow lg:basis-0 h-12">
            <Logo />
          </div>
          <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-green-600/10 py-4 font-mono text-sm text-green-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
            <div className="mx-auto flex items-center gap-3 px-4">
              <p>
                <span>04-08 of September, 2024</span>
              </p>
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
              >
                <circle cx={3} cy={3} r={3} />
              </svg>
              <p>Osnabrück</p>
            </div>
          </div>
          <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
            <a
              className="inline-flex justify-center rounded-2xl bg-green-600 p-4 text-base font-semibold text-white hover:bg-green-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:text-white/70"
              href="https://www.eventbrite.com/e/multilingua-2024-osnabruck-tickets-978388465237?aff=ebdssbdestsearch&keep_tld=1"
            >
              Get your tickets
            </a>
          </div>
        </div>
      </header>
      <main className="flex-auto">
        <div className="relative py-20 sm:pb-24 sm:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
              <h1 className="font-display text-5xl font-bold tracking-tighter text-green-600 sm:text-7xl">
                <span className="sr-only">DeceptiConf - </span>A conference
                for language enthusiasts.
              </h1>
              <div className="mt-6 space-y-6 font-display text-2xl tracking-tight leading-10 text-green-800">
                <p>
                  MultiLingua Osnabrück is a multi-day event that aims to bring together language enthusiasts, professionals, and content creators from around the world to share knowledge, foster connections, and celebrate linguistic diversity
                </p>
                <p>
                  Experience &quot;Multi Lingua&quot; at a unique venue! Our event takes place in a beautifully preserved, historic train station that boasts a rich history and charming surroundings.     </p>
              </div>
              <a
                className="inline-flex justify-center rounded-2xl bg-green-600 p-4 text-base font-semibold text-white hover:bg-green-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:text-white/70 mt-10 w-full sm:hidden"
                href="#"
              >
                Get your tickets
              </a>
              <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                <div>
                  <dt className="font-mono text-sm text-green-600">Speakers</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">
                    18
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-sm text-green-600">
                    People Attending
                  </dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">
                    2,091
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-sm text-green-600">Venue</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">
                    Historic Train Station
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-sm text-green-600">Location</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-green-900">
                    Osnabrück
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <section
          id="speakers"
          aria-labelledby="speakers-title"
          className="py-20 sm:py-32"
        >
          <svg aria-hidden="true" width={0} height={0}>
            <defs>
              <clipPath id=":R57qfja:-0" clipPathUnits="objectBoundingBox">
                <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
              </clipPath>
              <clipPath id=":R57qfja:-1" clipPathUnits="objectBoundingBox">
                <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
              </clipPath>
              <clipPath id=":R57qfja:-2" clipPathUnits="objectBoundingBox">
                <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
              </clipPath>
            </defs>
          </svg>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                id="speakers-title"
                className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl"
              >
                Speakers
              </h2>
              <p className="mt-4 font-display text-2xl tracking-tight text-green-900">
                Learn from the language enthusiasts, content creators, and experts in the language learning field
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
              {/* <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0"> */}
              {/*   <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" /> */}
              {/*   <div */}
              {/*     className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left" */}
              {/*     role="tablist" */}
              {/*     aria-orientation="vertical" */}
              {/*   > */}
              {/*     <DayButton isActive={false} label={"Opening Day"} date={"April 4"} /> */}
              {/*     <DayButton isActive={true} label={"Closing Day"} date={"April 5"} /> */}
              {/*   </div> */}
              {/* </div> */}
              <div className="lg:col-span-4">
                <div
                  className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-4"
                >
                  {uniqueSpeakers.map((speaker, index) => (
                    <Speaker key={index} speaker={speaker} />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
              <h2 className="font-display text-4xl font-medium tracking-tighter text-green-600 sm:text-5xl leading-[3rem]">
                Our four day schedule is packed with fascinating talks, language crash courses, games and workshops.
              </h2>
              <p className="mt-4 font-display text-2xl tracking-tight text-green-900 leading-10">
                Listen to interesting lectures, get introduced to new languages, participate in fun activities, network and foster connections with other language enthusiasts.
              </p>
            </div>
          </div>
          <div className="relative mt-14 sm:mt-24">
            <div className="absolute inset-0 overflow-hidden bg-orange-50 -bottom-32 -top-40">
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="grid lg:auto-cols-[33%] gap-6 grid-flow-col overflow-x-auto">
                <section>
                  <ProgramHeader title="September 4" desc={"Opening ceremony"} />
                  <ol
                    role="list"
                    className="mt-10 space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-green-900/5 backdrop-blur"
                  >
                    <ProgramItem title={events[0].title} time={events[0].time} name={events[0]?.name} date={events[0].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[1].title} time={events[1].time} name={events[1]?.name} date={events[1].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[2].title} time={events[2].time} name={events[2]?.name} date={events[2].date} />
                  </ol>
                </section>
                <section >
                  <ProgramHeader title="September 5" desc={"The German day"} />
                  <ol
                    role="list"
                    className="mt-10 space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-green-900/5 backdrop-blur"
                  >
                    <ProgramItem title={events[3].title} time={events[3].time} name={events[3]?.name} date={events[3].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[4].title} time={events[4].time} name={events[4]?.name} date={events[4].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[5].title} time={events[5].time} name={events[5]?.name} date={events[5].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[6].title} time={events[6].time} name={events[6]?.name} date={events[6].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[7].title} time={events[7].time} name={events[7]?.name} date={events[7].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[8].title} time={events[8].time} name={events[8]?.name} date={events[8].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[9].title} time={events[9].time} name={events[9]?.name} date={events[9].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[10].title} time={events[10].time} name={events[10]?.name} date={events[10].date} />

                  </ol>
                </section>
                <section>
                  <ProgramHeader title="September 6" desc={"The international day"} />
                  <ol
                    role="list"
                    className="mt-10 space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-green-900/5 backdrop-blur"
                  >
                    <ProgramItem title={events[11].title} time={events[11].time} name={events[11]?.name} date={events[11].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[12].title} time={events[12].time} name={events[12]?.name} date={events[12].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[13].title} time={events[13].time} name={events[13]?.name} date={events[13].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[14].title} time={events[14].time} name={events[14]?.name} date={events[14].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[15].title} time={events[15].time} name={events[15]?.name} date={events[15].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[16].title} time={events[16].time} name={events[16]?.name} date={events[16].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[17].title} time={events[17].time} name={events[17]?.name} date={events[17].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[18].title} time={events[18].time} name={events[18]?.name} date={events[18].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[19].title} time={events[19].time} name={events[19]?.name} date={events[19].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[20].title} time={events[20].time} name={events[20]?.name} date={events[20].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[21].title} time={events[21].time} name={events[21]?.name} date={events[21].date} />

                  </ol>
                </section>
                <section>
                  <ProgramHeader title="September 7" desc={"The Venezuelan day"} />
                  <ol
                    role="list"
                    className="mt-10 space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-green-900/5 backdrop-blur"
                  >
                    <ProgramItem title={events[22].title} time={events[22].time} name={events[22]?.name} date={events[22].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[23].title} time={events[23].time} name={events[23]?.name} date={events[23].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[24].title} time={events[24].time} name={events[24]?.name} date={events[24].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[25].title} time={events[25].time} name={events[25]?.name} date={events[25].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[26].title} time={events[26].time} name={events[26]?.name} date={events[26].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[27].title} time={events[27].time} name={events[27]?.name} date={events[27].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[28].title} time={events[28].time} name={events[28]?.name} date={events[28].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[29].title} time={events[29].time} name={events[29]?.name} date={events[29].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[30].title} time={events[30].time} name={events[30]?.name} date={events[30].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[31].title} time={events[31].time} name={events[31]?.name} date={events[31].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[32].title} time={events[32].time} name={events[32]?.name} date={events[32].date} />

                  </ol>
                </section>
                <section>
                  <ProgramHeader title="September 8" desc={"The relaxing day"} />
                  <ol
                    role="list"
                    className="mt-10 space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-green-900/5 backdrop-blur"
                  >
                    <ProgramItem title={events[33].title} time={events[33].time} name={events[33]?.name} date={events[33].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[34].title} time={events[34].time} name={events[34]?.name} date={events[34].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[35].title} time={events[35].time} name={events[35]?.name} date={events[35].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[36].title} time={events[36].time} name={events[36]?.name} date={events[36].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[37].title} time={events[37].time} name={events[37]?.name} date={events[37].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[38].title} time={events[38].time} name={events[38]?.name} date={events[38].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[39].title} time={events[39].time} name={events[39]?.name} date={events[39].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[40].title} time={events[40].time} name={events[40]?.name} date={events[40].date} />
                    <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
                    <ProgramItem title={events[41].title} time={events[41].time} name={events[41]?.name} date={events[41].date} />

                  </ol>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32"> */}
        {/*   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
        {/*     <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-green-900 sm:text-5xl"> */}
        {/*       Current sponsorships for our workshops and speakers. */}
        {/*     </h2> */}
        {/*     <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32"> */}
        {/*       <div className="flex items-center justify-center"> */}
        {/*         <img */}
        {/*           alt="Transistor" */}
        {/*           loading="lazy" */}
        {/*           width={158} */}
        {/*           height={48} */}
        {/*           decoding="async" */}
        {/*           data-nimg={1} */}
        {/*           style={{ color: "transparent" }} */}
        {/*           src="/_next/static/media/transistor.a1e38d49.svg" */}
        {/*         /> */}
        {/*       </div> */}
        {/*       <div className="flex items-center justify-center"> */}
        {/*         <img */}
        {/*           alt="Tuple" */}
        {/*           loading="lazy" */}
        {/*           width={105} */}
        {/*           height={48} */}
        {/*           decoding="async" */}
        {/*           data-nimg={1} */}
        {/*           style={{ color: "transparent" }} */}
        {/*           src="/_next/static/media/tuple.2f54ed03.svg" */}
        {/*         /> */}
        {/*       </div> */}
        {/*       <div className="flex items-center justify-center"> */}
        {/*         <img */}
        {/*           alt="StaticKit" */}
        {/*           loading="lazy" */}
        {/*           width={127} */}
        {/*           height={48} */}
        {/*           decoding="async" */}
        {/*           data-nimg={1} */}
        {/*           style={{ color: "transparent" }} */}
        {/*           src="/_next/static/media/statickit.2e06fcea.svg" */}
        {/*         /> */}
        {/*       </div> */}
        {/*       <div className="flex items-center justify-center"> */}
        {/*         <img */}
        {/*           alt="Mirage" */}
        {/*           loading="lazy" */}
        {/*           width={138} */}
        {/*           height={48} */}
        {/*           decoding="async" */}
        {/*           data-nimg={1} */}
        {/*           style={{ color: "transparent" }} */}
        {/*           src="/_next/static/media/mirage.e12f40ad.svg" */}
        {/*         /> */}
        {/*       </div> */}
        {/*       <div className="flex items-center justify-center"> */}
        {/*         <img */}
        {/*           alt="Laravel" */}
        {/*           loading="lazy" */}
        {/*           width={136} */}
        {/*           height={48} */}
        {/*           decoding="async" */}
        {/*           data-nimg={1} */}
        {/*           style={{ color: "transparent" }} */}
        {/*           src="/_next/static/media/laravel.6faebf7c.svg" */}
        {/*         /> */}
        {/*       </div> */}
        {/*       <div className="flex items-center justify-center"> */}
        {/*         <img */}
        {/*           alt="Statamic" */}
        {/*           loading="lazy" */}
        {/*           width={147} */}
        {/*           height={48} */}
        {/*           decoding="async" */}
        {/*           data-nimg={1} */}
        {/*           style={{ color: "transparent" }} */}
        {/*           src="/_next/static/media/statamic.923101b6.svg" */}
        {/*         /> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </section> */}

        <section id="faq" aria-label="faq" className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-green-900 sm:text-5xl">
              Frequently asked questions
            </h2>
            <div className="mt-20 mx-auto w-full">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={index.toString()} >
                    < AccordionTrigger className="text-left"> {faq.question}</AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}

              </Accordion>

            </div>
          </div></section >

        <section id="newsletter" aria-label="Newsletter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative -mx-4 overflow-hidden px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 sm:rounded-xl md:px-16 xl:px-24 xl:py-36 bg-orange-100">
              <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
                <div>
                  <p className="font-display text-4xl font-medium tracking-tighter text-green-900 sm:text-5xl">
                    Stay up to date
                  </p>
                  <p className="mt-4 text-lg tracking-tight text-green-900">
                    Get updates on all of our events and be the first to get
                    notified when tickets go on sale.
                  </p>
                </div>
                <form>
                  <h3 className="text-lg font-semibold tracking-tight text-green-900">
                    Sign up to our newsletter <span aria-hidden="true">↓</span>
                  </h3>
                  <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-green-900/5 focus-within:ring-2 focus-within:ring-green-900">
                    <input
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                      className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                    <button
                      className="inline-flex justify-center rounded-2xl bg-green-600 p-4 text-base font-semibold text-white hover:bg-green-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:text-white/70"
                      type="submit"
                    >
                      <span className="sr-only sm:not-sr-only">Sign up today</span>
                      <span className="sm:hidden">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            d="m14 7 5 5-5 5M19 12H5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main >
      <footer className="flex-none py-8">
      </footer>
    </div >

  );
}

function Speaker({ speaker }: { speaker: typeof speakers[number] }) {
  return (
    <div >
      <div className="group relative h-[17.5rem] transform overflow-hidden rounded-lg">
        <img
          alt=""
          width={1120}
          height={560}
          decoding="async"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110 "
          src={'https://picsum.photos/1120/560'}
        />
      </div>
      <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
        {speaker}
      </h3>
    </div>
  )
}

function DayButton({ isActive, label, date }: { isActive: boolean, label: string, date: string }) {
  return (
    <div className="relative lg:pl-8">
      <svg
        aria-hidden="true"
        viewBox="0 0 6 6"
        className={cn("absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-green-600", { 'fill-green-800': isActive })}
      >
        <circle cx={3} cy={3} r={3} />
      </svg>
      <div className="relative">
        <div className="font-mono text-sm text-green-600">
          <button
            className="ui-not-focus-visible:outline-none"
            id="headlessui-tabs-tab-:Rpjal7qfja:"
            role="tab"
            type="button"
            aria-selected="true"
            tabIndex={0}
            data-headlessui-state="selected"
            data-selected=""
            aria-controls="headlessui-tabs-panel-:Rdal7qfja:"
          >
            <span className="absolute inset-0" />
            {label}
          </button>
        </div>
        <time
          dateTime="2022-04-04"
          className="mt-1.5 block text-2xl font-semibold tracking-tight text-green-900"
        >
          {date}
        </time>
      </div>
    </div >
  )
}
function ProgramItem({ title, time, date, name }: { title: string, time: string, date: string, name?: string }) {
  return (
    <li aria-label="Steven McHail talking about Not so one-time payments at 9:00AM - 10:00AM PST">
      <h4 className="text-lg font-semibold tracking-tight text-green-900">
        {name}
      </h4>
      <p className="mt-1 tracking-tight text-green-900">
        {title}
      </p>
      <p className="mt-1 font-mono text-sm text-slate-500">
        {time}
      </p>
    </li>
  )
}
function ProgramHeader({ title, desc }: { title: string, desc: string }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-green-900">
        <time dateTime="2022-04-04">{title}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-green-900">
        {desc}
      </p>
    </>
  )
}
