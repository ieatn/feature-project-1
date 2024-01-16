"use client"
import Image from 'next/image'
import Link from "next/link"
import { ResponsiveBar } from "@nivo/bar"

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto snap snap-y">
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 fixed top-0 w-full z-50">
      <Link className="text-2xl font-bold text-gray-900 dark:text-gray-100" href="#">
        Boxing Brain Health
      </Link>
      <nav className="space-x-4">
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#statistics">
          Statistics
        </Link>
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#symptoms">
          Symptoms
        </Link>
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#prevention">
          Prevention
        </Link>
      </nav>
    </header>

    <main className="flex-1 snap-start">
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            The Impact of Boxing on Brain Health
          </h1>
          <p className="mt-4 mb-4 text-gray-600 dark:text-gray-400">
            Understanding the risks and prevention methods can help protect athletes from long-term damage.
          </p>
          <img
            alt="Brain Health Infographic"
            src="https://www.trbimg.com/img-57523524/turbine/la-muhammad-ali-vs-sonny-liston-1965-world-heavyweight-title-20160603/"
            className="w-full h-100 object-cover rounded-lg"
          />
          <p className="image-caption mt-4">Muhammad Ali, the legendary boxer, experienced brain injuries throughout his career, particularly due to repeated head trauma sustained in the ring. These injuries contributed to his later development of Parkinson's disease, highlighting the long-term consequences of boxing-related brain damage.</p>
         
        </div>
      </section>

      <section className="py-20 px-6" id="statistics">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Boxers Who Have Died From Head Injuries From the 1950s to 2000s</h2>
          <BarChart className="w-full aspect-[4/3]" />
          <p className='text-center'>Baird, L.C., Newman, C.B., Volk, H., Svinth, J.R., Conklin, J., & Levy, M.L. (2010). Mortality Resulting From Head Injury in Professional Boxing: Case Report. Neurosurgery, 67, E519–E520.</p>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900" id="symptoms">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Symptoms of Brain Damage</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Symptoms of brain damage from boxing can include headaches, memory loss, difficulty thinking, mood swings,
            and more.
          </p>
          <img
                alt="Brain Health Infographic"
                src="https://talksport.com/wp-content/uploads/sites/5/2023/07/Inoue-Right-Hand.jpg"
                className="w-full h-100 object-cover rounded-lg"
              />
              <p className="image-caption text-center">Understanding the Impact of Knockouts on Brain Health: Knockouts, while visually stunning in the ring, can have severe consequences on a boxer's brain health. The sudden and forceful blows during a knockout can lead to concussions and long-term brain damage.</p>
        </div>
      </section>
      <section className="py-20 px-6" id="prevention">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Prevention</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Preventive measures include proper training, wearing protective gear, and regular medical check-ups.
          </p>
          <img
                alt="Protective Gear"
                src="https://www.shutterstock.com/image-photo/set-taekwondo-equipment-on-wooden-600nw-1096455665.jpg"
                className="w-full h-100 object-cover rounded-lg"
              />
              <p className="image-caption text-center">The Significance of Protective Gear in Boxing: Wearing proper protective gear is crucial for minimizing risks in boxing, providing essential defense against potential injuries during training and matches.</p>
        </div>
      </section>

    </main>



    <footer className="py-12 px-6 bg-gray-900 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Take Action</h2>
        <p className="mt-4 text-gray-400">
          Join us in promoting safe boxing practices and protecting the health of athletes.
        </p>
        <button
          className="mt-8 px-8 py-3 bg-white text-gray-900 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-110"
        >
          Learn More
        </button>

      </div>
    </footer>
  </div>
)
}


function BarChart(props: any) {
return (
  <div {...props}>
    <ResponsiveBar
      data={[
        { name: "1950s", count: 140 },
        { name: "1960s", count: 115 },
        { name: "1970s", count: 100 },
        { name: "1980s", count: 75 },
        { name: "1990s", count: 85 },
        { name: "2000", count: 80 },
      ]}
      keys={["count"]}
      indexBy="name"
      margin={{ top: 50, right: 0, bottom: 40, left: 40 }}
      padding={0.3}
      colors={["#2563eb"]}
      axisBottom={{
        tickSize: 0,
        tickPadding: 16,
      }}
      axisLeft={{
        tickSize: 0,
        tickValues: [0, 50, 100, 150],
        tickPadding: 10,
      }}
      gridYValues={4}
      theme={{
        axis: {
          ticks: {
            text: {
              fontSize: 20, // Adjust the font size for axis labels
              fill: 'white'
            },
          },
        },
        tooltip: {
          chip: {
            borderRadius: "9999px",
          },
          container: {
            fontSize: "12px",
            textTransform: "capitalize",
            borderRadius: "6px",
          },
        },
        grid: {
          line: {
            stroke: "#f3f4f6",
          },
        },
      }}
      tooltip={({ id, value }) => (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "6px",
            color: "#000", // Set text color to black
          }}
        >
          {id}: {value}
        </div>
      )}
      tooltipLabel={({ id, value }) => `${id}: ${value}`}
      enableLabel={false}
      role="application"
      ariaLabel="A bar chart showing data"
    />
  </div>
  )
}
