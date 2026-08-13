'use client';

import { Check, Copy } from 'lucide-react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

const K = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-kw">{children}</span>
);
const F = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-fn">{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="tok-str">&quot;{children}&quot;</span>
);

const codeText = `class SoftwareEngineer:

    def __init__(self):
        self.name = "Wenhao He"
        self.role = "Founder & Software Engineer"
        self._email = "wenhaohe8@gmail.com"

        self.education = [
            "MS in Artificial Intelligence, UB (SUNY)",
            "BS in Computer Science, UB (SUNY)",
        ]

        self.certifications = [
            "AWS Certified Developer, Associate (Feb 2026)",
        ]

        self.stack = {
            "languages": ["Python", "TypeScript", "Java", "Bash"],
            "frontend":  ["React", "Next.js", "React Native"],
            "backend":   ["Node", "GraphQL", "Kafka", "Spring"],
            "ai_ml":     ["Bedrock", "LangChain", "RAG"],
            "cloud":     ["Lambda", "DynamoDB", "S3", "Docker"],
        }

    @property
    def current_focus(self):
        return "AWS-backed AI products and full-stack systems"

    def __repr__(self):
        return f"{self.name} | {self.role}"`;

export default function CodeBlock() {
  const { copy, copied } = useCopyToClipboard();

  return (
    <div className="code-panel">
      <div className="code-bar">
        <span>software_engineer.py</span>
        <button
          className="code-copy"
          aria-label={copied ? 'Copied' : 'Copy code'}
          onClick={() => copy(codeText)}
        >
          {copied ? <Check /> : <Copy />}
        </button>
      </div>

      <div className="code-body">
        <pre>
          <K>class</K> <F>SoftwareEngineer</F>:{'\n\n'}
          {'    '}
          <K>def</K> <F>__init__</F>(<K>self</K>):{'\n'}
          {'        '}
          <K>self</K>.name = <S>Wenhao He</S>
          {'\n'}
          {'        '}
          <K>self</K>.role = <S>Founder &amp; Software Engineer</S>
          {'\n'}
          {'        '}
          <K>self</K>._email = <S>wenhaohe8@gmail.com</S>
          {'\n\n'}
          {'        '}
          <K>self</K>.education = [{'\n'}
          {'            '}
          <S>MS in Artificial Intelligence, UB (SUNY)</S>,{'\n'}
          {'            '}
          <S>BS in Computer Science, UB (SUNY)</S>,{'\n'}
          {'        '}]{'\n\n'}
          {'        '}
          <K>self</K>.certifications = [{'\n'}
          {'            '}
          <S>AWS Certified Developer, Associate (Feb 2026)</S>,{'\n'}
          {'        '}]{'\n\n'}
          {'        '}
          <K>self</K>.stack = {'{'}
          {'\n'}
          {'            '}
          <S>languages</S>: [<S>Python</S>, <S>TypeScript</S>, <S>Java</S>, <S>Bash</S>],{'\n'}
          {'            '}
          <S>frontend</S>:{'  '}[<S>React</S>, <S>Next.js</S>,{' '}
          <S>React Native</S>],{'\n'}
          {'            '}
          <S>backend</S>:{'   '}[<S>Node</S>, <S>GraphQL</S>, <S>Kafka</S>,{' '}
          <S>Spring</S>],{'\n'}
          {'            '}
          <S>ai_ml</S>:{'     '}[<S>Bedrock</S>, <S>LangChain</S>, <S>RAG</S>],
          {'\n'}
          {'            '}
          <S>cloud</S>:{'     '}[<S>Lambda</S>, <S>DynamoDB</S>, <S>S3</S>,{' '}
          <S>Docker</S>],{'\n'}
          {'        '}
          {'}'}
          {'\n\n'}
          {'    '}
          <K>@property</K>
          {'\n'}
          {'    '}
          <K>def</K> <F>current_focus</F>(<K>self</K>):{'\n'}
          {'        '}
          <K>return</K> <S>AWS-backed AI products and full-stack systems</S>
          {'\n\n'}
          {'    '}
          <K>def</K> <F>__repr__</F>(<K>self</K>):{'\n'}
          {'        '}
          <K>return</K>{' '}
          <span className="tok-str">
            f&quot;{'{'}self.name{'}'} | {'{'}self.role{'}'}&quot;
          </span>
        </pre>
      </div>
    </div>
  );
}
