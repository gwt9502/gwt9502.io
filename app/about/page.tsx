import Image from 'next/image'
import coding from 'public/coding.gif'
import CustomLink from '../components/custom-link'

export default function About() {
  return (
    <section>
      <Image
        src="https://readme-typing-svg.demolab.com?font=Jetbrains+Mono&size=19&pause=1000&center=true&vCenter=true&random=false&width=435&lines=console.log('hello+world')"
        alt="Typing SVG"
        width={430}
        height={50}
        className="m-auto"
      />
      <Image
        src={coding}
        alt="coding"
        width={480}
        height={260}
        className="m-auto"
      />
      <p className="text-center font-bold my-3">
        Technology has the power to make the world a better place
      </p>
      <h1 className="font-bold text-xl">Hi! Nice to meet you!</h1>
      <ul className="leading-8">
        <li>👋 Hi, I&apos;m gwt9502</li>
        <li>
          👀 I&apos;m interest in web, Nodejs, Reactjs, Vuejs, Mini Program,
          TypeScript, etc.
        </li>
        <li>
          🌱 I&apos;m currently working{' '}
          <CustomLink
            href={'https://jd.com'}
            className="underline underline-offset-1"
          >
            JD
          </CustomLink>
        </li>
        <li>💞️ I&apos;m looking to learn LowCode、ChatGpt</li>
        <li>
          📫 How to reach me? Email:{' '}
          <CustomLink href={'mailto:gwt9502@163.com'}>
            gwt9502@163.com
          </CustomLink>
        </li>
      </ul>
    </section>
  )
}
