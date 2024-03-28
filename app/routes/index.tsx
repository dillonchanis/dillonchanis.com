import { Title, Paragraph } from "../components/Typography";

export default function Index() {
  return (
    <div>
      <header>
        <Title>Dillon Chanis</Title>
        <Paragraph className="text-slate-500 dark:text-slate-400 mt-1 ml-0.5">
          Senior Software Engineer
        </Paragraph>
      </header>

      <div className="mt-12">
        <Paragraph className="pb-6">
          Hello, all! I am a self taught software engineer based in North Carolina. I have many years of experience helping teams scale their
          front-end architecture. I love collaborating with other passionate
          developers on new ideas and projects.
        </Paragraph>

        <Paragraph className="pb-4">
          Here are some of the tech I love working with.
        </Paragraph>

        <ul className="grid grid-cols-2 pb-6 list-disc list-inside text-slate-700 dark:text-slate-300">
          <li>Remix</li>
          <li>Tailwind</li>
          <li>Nuxt / Vue 3</li>
          <li>NX</li>
          <li>Cloudflare</li>
          <li>TypeScript</li>
          <li>Rust</li>
          <li>Figma</li>
          <li>RxJS</li>
        </ul>

        <Paragraph className="pb-6">
          Outside of coding, I love spending time with my wife, Gina, and my two
          cats, Luna &amp; Eve.
        </Paragraph>
        <Paragraph className="pb-6">
          If you want to get in touch with me just{" "}
          <a
            className="underline text-violet-500 dark:text-violet-300 hover:text-violet-400 decoration-violet-400 dark:decoration-violet-300 decoration-dotted decoration-2 underline-offset-2"
            href="mailto:dillonchanis92@gmail.com"
          >
            send me an email
          </a>
          .
        </Paragraph>
      </div>
    </div>
  );
}
