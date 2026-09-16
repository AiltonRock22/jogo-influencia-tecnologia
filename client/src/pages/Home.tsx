import { useMemo, useState } from "react";
import { ArrowRight, Brain, Check, Eye, EyeOff, RotateCcw, ShieldCheck, Sparkles, Waypoints } from "lucide-react";

const options = [
  { id: "mapa", title: "Ver o mapa", text: "Descobrir quais caminhos parecem mais próximos.", tag: "Orientação", tone: "cyan" },
  { id: "video", title: "Assistir ao vídeo", text: "Entender o assunto por uma história curta.", tag: "Curiosidade", tone: "amber" },
  { id: "produto", title: "Conhecer o produto", text: "Comparar algo que apareceu para você.", tag: "Praticidade", tone: "violet" },
];

const traces = [
  { icon: "01", title: "Você escolheu um interesse", text: "A escolha foi fictícia, mas sistemas reais podem registrar cliques e buscas." },
  { icon: "02", title: "A interface organizou a atenção", text: "Cor, posição, tamanho e ordem fizeram algumas opções parecerem mais convidativas." },
  { icon: "03", title: "Um perfil poderia ser inferido", text: "Uma escolha isolada não define ninguém. Muitas ações, reunidas, podem criar categorias e recomendações." },
];

export default function Home() {
  const [step, setStep] = useState<"intro" | "choice" | "trace" | "reveal">("intro");
  const [selected, setSelected] = useState<string | null>(null);
  const selectedOption = useMemo(() => options.find((option) => option.id === selected), [selected]);

  function start() { setStep("choice"); }
  function choose(id: string) { setSelected(id); setStep("trace"); }
  function restart() { setSelected(null); setStep("intro"); }

  return (
    <main className="min-h-screen overflow-hidden bg-[#08152f] text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(34,211,238,.18),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(245,158,11,.12),transparent_25%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-5 py-6 sm:px-10 lg:px-14">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <button onClick={restart} className="text-left" aria-label="Reiniciar experiência"><span className="font-serif text-xl tracking-tight sm:text-2xl">O Caminho de uma <em className="text-amber-300">Escolha</em></span><span className="mt-1 block text-[10px] uppercase tracking-[.28em] text-cyan-200/70">Impacto da tecnologia na sociedade</span></button>
          <div className="hidden items-center gap-2 text-right text-[10px] uppercase tracking-[.2em] text-slate-400 sm:flex"><ShieldCheck className="h-4 w-4 text-amber-300" /> demonstração sem coleta</div>
        </header>

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-10">
          <div className="mb-8 flex items-center justify-center gap-0 text-[10px] uppercase tracking-[.18em] text-slate-500 sm:gap-10">
            {[['01', 'Escolha', 'choice'], ['02', 'Rastro', 'trace'], ['03', 'Revelação', 'reveal']].map(([number, label, value], index) => <div key={value} className={`flex items-center gap-2 ${step === value || (step === 'intro' && index === 0) ? 'text-amber-300' : step === 'reveal' || (step === 'trace' && index === 0) ? 'text-cyan-300' : ''}`}><span className="flex h-7 w-7 items-center justify-center rounded-full border border-current font-mono text-xs">{number}</span><span className="hidden sm:inline">{label}</span>{index < 2 && <span className="mx-1 h-px w-8 bg-white/15 sm:mx-3 sm:w-16" />}</div>)}
          </div>

          {step === "intro" && <section className="grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
            <div><p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.26em] text-cyan-300"><Sparkles className="h-4 w-4" /> experiência de 3 minutos</p><h1 className="max-w-3xl font-serif text-5xl leading-[.96] tracking-tight text-white sm:text-7xl">Pequenas escolhas.<br /><span className="text-amber-300">Grandes efeitos.</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">Você fará escolhas fictícias em uma interface. No fim, vamos mostrar como cores, posições e palavras podem orientar sua atenção — e por que compreender isso protege sua autonomia.</p><div className="mt-8 flex flex-wrap items-center gap-4"><button onClick={start} className="group flex items-center gap-3 rounded-full bg-amber-300 px-6 py-3 font-bold text-[#08152f] transition hover:bg-amber-200 active:scale-[.98]">Começar demonstração <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button><span className="text-xs text-slate-500">Sem cadastro · sem respostas salvas</span></div></div>
            <div className="relative hidden overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#0b2348] shadow-2xl shadow-cyan-950/30 lg:block"><img src="/manus-storage/caminho-escolha-reference_6f070926.png" alt="Exemplo visual da experiência" className="h-auto w-full opacity-80" /><div className="absolute inset-0 bg-gradient-to-t from-[#08152f] via-transparent to-transparent" /><p className="absolute bottom-5 left-6 text-xs uppercase tracking-[.2em] text-white/70">Toda escolha deixa um rastro</p></div>
          </section>}

          {step === "choice" && <section><div className="mb-8 max-w-2xl"><p className="text-xs uppercase tracking-[.24em] text-cyan-300">Cena 01 · escolha fictícia</p><h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">O que chama sua atenção primeiro?</h2><p className="mt-4 leading-7 text-slate-300">Imagine que você abriu uma plataforma e encontrou estas três possibilidades. Escolha uma — não existe resposta certa.</p></div><div className="grid gap-5 md:grid-cols-3">{options.map((option, index) => <button key={option.id} onClick={() => choose(option.id)} className={`choice-card text-left ${index === 1 ? 'featured' : ''} tone-${option.tone}`}><div className="choice-art"><span>{index === 0 ? '◌' : index === 1 ? '✦' : '♡'}</span></div><div className="p-5"><span className="text-[10px] font-bold uppercase tracking-[.2em] text-amber-300">{option.tag}</span><h3 className="mt-3 font-serif text-2xl text-white">{option.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{option.text}</p><span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-200">Escolher <ArrowRight className="h-3 w-3" /></span></div></button>)}</div><p className="mt-8 flex items-center gap-2 text-xs text-slate-500"><Eye className="h-4 w-4" /> Observe: alguma opção pareceu mais importante antes mesmo de você ler tudo?</p></section>}

          {step === "trace" && <section className="grid items-start gap-10 lg:grid-cols-[1fr_.75fr]"><div><p className="text-xs uppercase tracking-[.24em] text-cyan-300">Cena 02 · o rastro</p><h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">Você escolheu <span className="text-amber-300">{selectedOption?.title.toLowerCase()}</span>.</h2><p className="mt-5 max-w-xl leading-7 text-slate-300">Nesta demonstração, a escolha não será usada para classificar você. Ela serve para enxergar uma coisa: uma interface pode orientar atenção sem ordenar explicitamente o que fazer.</p><div className="mt-8 grid gap-3">{traces.map((item) => <div key={item.icon} className="flex gap-4 rounded-xl border border-white/10 bg-white/[.04] p-4"><span className="font-mono text-sm text-amber-300">{item.icon}</span><div><h3 className="font-semibold text-white">{item.title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p></div></div>)}</div><button onClick={() => setStep("reveal")} className="mt-8 flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3 font-bold text-[#08152f] transition hover:bg-cyan-200">Ver a revelação <ArrowRight className="h-4 w-4" /></button></div><aside className="rounded-2xl border border-amber-300/30 bg-amber-300/[.08] p-6"><Waypoints className="h-7 w-7 text-amber-300" /><p className="mt-8 text-sm uppercase tracking-[.18em] text-amber-200">Seu rastro fictício</p><div className="mt-4 border-l border-amber-300/40 pl-5"><p className="font-serif text-2xl text-white">interesse → atenção → recomendação</p><p className="mt-4 text-sm leading-6 text-slate-300">Na vida real, rastros podem incluir cliques, buscas, localização e tempo de permanência. Por isso, o projeto não registra nada sobre você.</p></div></aside></section>}

          {step === "reveal" && <section className="mx-auto max-w-4xl"><div className="text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/50 bg-amber-300/10 text-amber-300"><Brain className="h-8 w-8" /></div><p className="mt-6 text-xs uppercase tracking-[.24em] text-cyan-300">Cena 03 · revelação</p><h2 className="mt-3 font-serif text-4xl text-white sm:text-6xl">A interface também participa da escolha.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">Você continua responsável pela decisão, mas a forma de apresentar as opções pode facilitar, dificultar ou tornar uma escolha mais atraente.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{[['Cor', 'Um botão chamativo pode parecer mais urgente.', 'text-amber-300'], ['Posição', 'O que aparece primeiro recebe mais atenção.', 'text-cyan-300'], ['Linguagem', 'Palavras como “última chance” pressionam o tempo.', 'text-violet-300']].map(([title, text, color]) => <div key={title} className="rounded-xl border border-white/10 bg-white/[.04] p-5"><EyeOff className={`h-5 w-5 ${color}`} /><h3 className="mt-5 font-serif text-2xl text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>)}</div><div className="mt-8 rounded-2xl border border-cyan-300/30 bg-cyan-300/[.06] p-6 text-center"><p className="font-serif text-2xl text-white">Pergunta para levar para a feira</p><p className="mt-3 text-lg text-cyan-100">Você controla completamente aquilo que aparece na sua tela?</p><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400">Compreender tecnologia não elimina toda influência, mas aumenta nossa capacidade de perceber escolhas, questionar estímulos e proteger dados e autonomia.</p></div><div className="mt-8 flex flex-wrap justify-center gap-3"><button onClick={restart} className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"><RotateCcw className="h-4 w-4" /> Reiniciar para outro visitante</button><span className="flex items-center gap-2 px-4 py-3 text-xs text-slate-500"><Check className="h-4 w-4 text-emerald-300" /> nenhuma resposta foi armazenada</span></div></section>}
        </div>

        <footer className="flex flex-col gap-2 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>Sala temática · Ciências Humanas</span><span>Impacto da tecnologia na sociedade</span></footer>
      </div>
    </main>
  );
}
