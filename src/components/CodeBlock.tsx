'use client';

import { Copy } from 'lucide-react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import ScrollReveal from './ScrollReveal';

const codeText = `class SoftwareEngineer:

    def __init__(self):
        self.name = "Wenhao He"
        self.role = "Software Engineer"
        self._email = "wenhaohe8@gmail.com"

        self.education = [
            "M.S. in Artificial Intelligence — University at Buffalo (SUNY)",
            "B.S. in Computer Science — University at Buffalo (SUNY)",
        ]

        self.experience = [
            "Software Engineer @ Clipp — New York, NY",
            "Software Engineer @ CAN International — New York, NY",
        ]

        self.stack = {
            "languages": ["Python", "TypeScript", "JavaScript", "C/C++", "C#", "Java", "Go"],
            "frontend":  ["React", "Next.js", "React Native", "Angular", "Tailwind"],
            "backend":   [".NET", "Node.js", "Express", "Flask", "Spring", "GraphQL"],
            "databases": ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
            "ai_ml":     ["LLMs", "RAG", "Transformers", "TensorFlow", "PyTorch"],
            "cloud":     ["AWS", "Terraform", "Docker", "Kubernetes", "GCP", "Azure"],
        }

    @property
    def current_focus(self):
        return "Building scalable full-stack & AI-powered solutions"

    def __repr__(self):
        return f"{self.name} | {self.role}"`;

export default function CodeBlock() {
  const { copy, copied } = useCopyToClipboard();

  return (
    <ScrollReveal delay={3}>
      <div className="code-block">
        <div className="code-header">
          <span>About Me in Python Code</span>
          <button
            className={`code-copy tooltip ${copied ? 'copied' : ''}`}
            data-tooltip={copied ? 'Copied!' : 'Copy code'}
            onClick={() => copy(codeText)}
          >
            <span>Copy code</span>
            <Copy size={16} />
          </button>
        </div>
        <div className="code-content">
          <pre>
            <span className="keyword">class</span>{' '}
            <span className="function">SoftwareEngineer</span>:{'\n'}
            {'\n'}
            {'    '}<span className="keyword">def</span>{' '}
            <span className="function">__init__</span>(
            <span className="keyword">self</span>):{'\n'}
            {'        '}<span className="keyword">self</span>.name ={' '}
            <span className="string">&quot;Wenhao He&quot;</span>{'\n'}
            {'        '}<span className="keyword">self</span>.role ={' '}
            <span className="string">&quot;Software Engineer&quot;</span>{'\n'}
            {'        '}<span className="keyword">self</span>._email ={' '}
            <span className="string">&quot;wenhaohe8@gmail.com&quot;</span>{'\n'}
            {'\n'}
            {'        '}<span className="keyword">self</span>.education = [{'\n'}
            {'            '}<span className="string">&quot;M.S. in Artificial Intelligence &mdash; University at Buffalo (SUNY)&quot;</span>,{'\n'}
            {'            '}<span className="string">&quot;B.S. in Computer Science &mdash; University at Buffalo (SUNY)&quot;</span>,{'\n'}
            {'        '}]{'\n'}
            {'\n'}
            {'        '}<span className="keyword">self</span>.experience = [{'\n'}
            {'            '}<span className="string">&quot;Software Engineer @ Clipp &mdash; New York, NY&quot;</span>,{'\n'}
            {'            '}<span className="string">&quot;Software Engineer @ CAN International &mdash; New York, NY&quot;</span>,{'\n'}
            {'        '}]{'\n'}
            {'        '}{'\n'}
            {'        '}<span className="keyword">self</span>.stack = {'{'}{'\n'}
            {'            '}<span className="string">&quot;languages&quot;</span>: [<span className="string">&quot;Python&quot;</span>, <span className="string">&quot;TypeScript&quot;</span>, <span className="string">&quot;JavaScript&quot;</span>, <span className="string">&quot;C/C++&quot;</span>, <span className="string">&quot;C#&quot;</span>, <span className="string">&quot;Java&quot;</span>, <span className="string">&quot;Go&quot;</span>],{'\n'}
            {'            '}<span className="string">&quot;frontend&quot;</span>:  [<span className="string">&quot;React&quot;</span>, <span className="string">&quot;Next.js&quot;</span>, <span className="string">&quot;React Native&quot;</span>, <span className="string">&quot;Angular&quot;</span>, <span className="string">&quot;Tailwind&quot;</span>],{'\n'}
            {'            '}<span className="string">&quot;backend&quot;</span>:   [<span className="string">&quot;.NET&quot;</span>, <span className="string">&quot;Node.js&quot;</span>, <span className="string">&quot;Express&quot;</span>, <span className="string">&quot;Flask&quot;</span>, <span className="string">&quot;Spring&quot;</span>, <span className="string">&quot;GraphQL&quot;</span>],{'\n'}
            {'            '}<span className="string">&quot;databases&quot;</span>: [<span className="string">&quot;MySQL&quot;</span>, <span className="string">&quot;PostgreSQL&quot;</span>, <span className="string">&quot;MongoDB&quot;</span>, <span className="string">&quot;DynamoDB&quot;</span>, <span className="string">&quot;Redis&quot;</span>],{'\n'}
            {'            '}<span className="string">&quot;ai_ml&quot;</span>:     [<span className="string">&quot;LLMs&quot;</span>, <span className="string">&quot;RAG&quot;</span>, <span className="string">&quot;Transformers&quot;</span>, <span className="string">&quot;TensorFlow&quot;</span>, <span className="string">&quot;PyTorch&quot;</span>],{'\n'}
            {'            '}<span className="string">&quot;cloud&quot;</span>:     [<span className="string">&quot;AWS&quot;</span>, <span className="string">&quot;Terraform&quot;</span>, <span className="string">&quot;Docker&quot;</span>, <span className="string">&quot;Kubernetes&quot;</span>, <span className="string">&quot;GCP&quot;</span>, <span className="string">&quot;Azure&quot;</span>],{'\n'}
            {'        '}{'}'}{'\n'}
            {'\n'}
            {'    '}<span className="keyword">@property</span>{'\n'}
            {'    '}<span className="keyword">def</span>{' '}
            <span className="function">current_focus</span>(
            <span className="keyword">self</span>):{'\n'}
            {'        '}<span className="keyword">return</span>{' '}
            <span className="string">&quot;Building scalable full-stack &amp; AI-powered solutions&quot;</span>{'\n'}
            {'    '}{'\n'}
            {'    '}<span className="keyword">def</span>{' '}
            <span className="function">__repr__</span>(
            <span className="keyword">self</span>):{'\n'}
            {'        '}<span className="keyword">return</span>{' '}
            <span className="string">f&quot;{'{'}self.name{'}'} | {'{'}self.role{'}'}&quot;</span>
          </pre>
        </div>
      </div>
    </ScrollReveal>
  );
}
