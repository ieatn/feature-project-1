"use client"
import Image from 'next/image'
import Link from "next/link"
import { ResponsiveBar } from "@nivo/bar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
      <Link className="text-2xl font-bold text-gray-900 dark:text-gray-100" href="#">
        Boxing Brain Health
      </Link>
      <nav className="space-x-4">
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
          Statistics
        </Link>
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
          Symptoms
        </Link>
        <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" href="#">
          Prevention
        </Link>
      </nav>
    </header>
    <main className="flex-1">
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            The Impact of Boxing on Brain Health
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Understanding the risks and prevention methods can help protect athletes from long-term damage.
          </p>
          <img
            alt="Boxing"
            className="mt-8 w-full h-64 object-cover rounded-lg"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </section>
      <section className="py-20 px-6" id="statistics">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Statistics</h2>
          <BarChart className="w-full aspect-[4/3]" />
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900" id="symptoms">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Symptoms of Brain Damage</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Symptoms of brain damage from boxing can include headaches, memory loss, difficulty thinking, mood swings,
            and more.
          </p>
        </div>
      </section>
      <section className="py-20 px-6" id="prevention">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Prevention</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Preventive measures include proper training, wearing protective gear, and regular medical check-ups.
          </p>
        </div>
      </section>
    </main>
    <footer className="py-12 px-6 bg-gray-900 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Take Action</h2>
        <p className="mt-4 text-gray-400">
          Join us in promoting safe boxing practices and protecting the health of athletes.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-gray-900 rounded-lg">Learn More</button>
      </div>
    </footer>
  </div>
)
}

function BarChart(props) {
return (
  <div {...props}>
    <ResponsiveBar
      data={[
        { name: "Jan", count: 111 },
        { name: "Feb", count: 157 },
        { name: "Mar", count: 129 },
        { name: "Apr", count: 150 },
        { name: "May", count: 119 },
        { name: "Jun", count: 72 },
      ]}
      keys={["count"]}
      indexBy="name"
      margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
      padding={0.3}
      colors={["#2563eb"]}
      axisBottom={{
        tickSize: 0,
        tickPadding: 16,
      }}
      axisLeft={{
        tickSize: 0,
        tickValues: 4,
        tickPadding: 16,
      }}
      gridYValues={4}
      theme={{
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
      tooltipLabel={({ id }) => `${id}`}
      enableLabel={false}
      role="application"
      ariaLabel="A bar chart showing data"
    />
  </div>
  )
}
