import React, { useState } from 'react';
import './index.css';

const gold = '#c8a24a';
const blue = '#075b96';
const teal = '#169b8f';

export default function MediHomeTestSite() {
  const [page, setPage] = useState('home');

  const Nav = () => (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => setPage('home')} className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full border-2 border-[#075b96] flex items-center justify-center text-[#169b8f] font-bold">医</div>
          <div className="text-left leading-tight">
            <div className="text-xl font-bold text-[#075b96]">医行家</div>
            <div className="text-xs font-semibold text-[#169b8f]">MediHome</div>
          </div>
        </button>
        <nav className="hidden md:flex items-center gap-10 text-slate-500 font-medium">
          <button onClick={() => setPage('about')} className={page==='about'?'text-[#075b96] font-bold':''}>关于我们</button>
          <button onClick={() => setPage('services')} className={page==='services'?'text-[#075b96] font-bold':''}>核心服务</button>
          <button onClick={() => setPage('member')} className={page==='member'?'text-[#075b96] font-bold':''}>会员专属</button>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm text-slate-400">简体中文 / EN</span>
          <button className="rounded-md px-5 py-3 text-white font-bold shadow-sm" style={{backgroundColor: gold}}>会员登录</button>
        </div>
      </div>
    </header>
  );

  const Home = () => (
    <main>
      <section className="relative min-h-[560px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1800&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#075b96]/40 via-[#169b8f]/25 to-[#d9c78a]/20" />
        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-sm">Navigate Your Health</h1>
          <p className="mt-8 text-4xl md:text-5xl font-extrabold text-white drop-shadow-sm">一站式海外华人跨境就医平台</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold text-[#075b96]">核心服务体系</h2>
        <p className="mt-4 text-slate-500 text-lg">针对国内外就医痛点，为海外华人提供更多医疗选择，一键开启安心医疗之旅。</p>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <ServiceCard icon={<span>🎥</span>} title="远程问诊" text="提供远程报告解读、线上初步咨询和建议，线上医疗翻译。" />
          <ServiceCard featured icon={<span>🛡️</span>} title="定制回国就医" text="方案定制、陪诊翻译、全面体检、高端医美一站式安排。" />
          <ServiceCard light icon={<span>✈️</span>} title="定制海外诊疗" text="聚焦海外顶尖技术，解决疑难杂症，重获健康希望。" />
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#f7efd9] text-[#c8a24a] px-7 py-3 text-xl font-extrabold">MEMBER PRIVILEGE</span>
            <h2 className="mt-6 text-3xl font-extrabold text-[#075b96]">锁定会员价，健康无边界</h2>
            <Benefit title="深度折扣优惠" text="国内外合作机构体检、医美项目尊享会员协议价。" />
            <Benefit title="定制就医方案" text="为会员定制就医计划，协调医疗资源与跨院安排。费用根据所选医院与医生等级单独报价。" />
            <button onClick={() => setPage('member')} className="mt-7 rounded-lg px-8 py-4 text-white text-xl font-bold shadow-sm" style={{backgroundColor: gold}}>了解会员方案</button>
          </div>
          <div className="rounded-xl bg-[#8eb0d3] min-h-[360px] flex items-center justify-center p-8">
            <div className="bg-slate-900 text-white rounded-xl w-64 h-40 p-6 shadow-2xl rotate-[-2deg]">
              <div className="text-sm text-slate-300">Premium Card</div>
              <div className="mt-12 text-lg font-bold">membership card</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  const Services = () => (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-[#075b96]">远程图文问诊</h1>
        <p className="mt-5 text-lg font-bold text-slate-500">非会员30加元/次，个人年度会员可享10次/年，家庭年度会员可享16次/年</p>
        <p className="mt-8 max-w-3xl mx-auto text-slate-400 leading-8">无需跨国飞行，通过工单系统提交您的病历资料。医生将为您提供专业的医疗预评估与就医建议，帮助您判断是否需要回国或出国进一步治疗。</p>
      </section>
      <div className="mt-16 grid grid-cols-4 gap-4 border-t pt-0">
        {[['1','提交资料','上传病历、影像'],['2','专家评估','匹配国内外对应领域专家'],['3','获取报告','24-48小时内下发建议'],['4','后续安排','定制化线下就医对接']].map((s,i)=>(
          <div key={s[0]} className="text-center -mt-4">
            <div className="mx-auto w-9 h-9 rounded-full text-white font-bold flex items-center justify-center" style={{backgroundColor: i===2?gold:i===3?'#dbe3eb':i===1?teal:blue}}>{s[0]}</div>
            <div className="mt-6 text-xl font-extrabold text-slate-800">{s[1]}</div>
            <div className="mt-3 text-slate-400">{s[2]}</div>
          </div>
        ))}
      </div>
      <section className="mt-16">
        <h2 className="border-l-8 border-[#075b96] pl-6 text-3xl font-extrabold text-slate-800">发起远程预评估</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-16">
          <FormField label="当前所在地" value="美国" />
          <FormField label="咨询类型" value="回国就医初评" />
        </div>
        <label className="block mt-10 font-medium text-slate-700">病情详细描述（请包含症状、持续时间、已做过的检查）</label>
        <textarea className="mt-4 w-full h-48 bg-slate-50 border-0 rounded-sm p-5 text-slate-500" placeholder="在此输入具体情况..." />
        <label className="block mt-8 font-medium text-slate-700">影像及附件上传（支持JPG、PNG、PDF格式）</label>
        <div className="mt-4 h-44 border-2 border-dashed border-slate-600 flex flex-col items-center justify-center text-slate-400">
          <div style={{fontSize:32}}>☁️</div>
          <p className="mt-4">点击或将文件拖拽至此处上传</p>
        </div>
        <div className="mt-8 bg-[#fff8e6] text-[#a6812b] p-5 leading-7">* 说明：本服务为异步工单模式。医生将在约定时间内（24-48小时内）通过系统后台回复。您可以随时登录会员中心查看处理进度及评估报告。</div>
        <div className="mt-12 text-right">
          <button className="rounded-md bg-[#075b96] px-12 py-5 text-white text-2xl font-extrabold shadow-sm">提交工单</button>
        </div>
      </section>
    </main>
  );

  const About = () => (
    <main>
      <section className="bg-[#0872ad] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold">Navigate Your Health</h1>
            <h2 className="mt-5 text-3xl font-extrabold">一站式海外华人跨境就医平台</h2>
            <p className="mt-8 text-lg leading-9 text-blue-100">医行家 MediHome 致力于成为搭建一座联结国内外健康医疗资源的桥梁，提供本土化中文服务、远程医疗协作及个性化服务，为海外华人带来更多选择。</p>
          </div>
          <div className="relative">
            <img
              className="rounded-sm shadow-lg"
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              alt="医生使用平板电脑查看医疗资料"
            />
            <div className="absolute -bottom-6 left-10 bg-white text-slate-600 rounded-lg px-8 py-5 shadow-xl font-bold">在医行家的帮助下，我回国成功进行了全面体检。</div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <AboutLine title='“懂”的语言文化' text="我们只说您听得懂的健康语言，理解您文化背景下的健康观念与担忧。" />
          <AboutLine title='“专”的医疗资源' text="连接全球优质华人医疗专家网络，提供基于循证医学的专业建议。" />
          <AboutLine title='“全”的服务覆盖' text="从日常小病咨询、慢病管理、体检解读，到就医指导第二诊疗意见，全方位满足需求。" />
          <AboutLine title='“安”的隐私保障' text="严格保护您的个人信息和医疗隐私，咨询安全无忧。" />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-800">联系我们</h2>
          <Contact label="客服电话" text="+1 778-798-9466" />
          <Contact label="电子邮箱" text="info@medihomeglobal.com" />
          <Contact label="公司地址" text="RM 401, 4/F., WANCHAI CENTRAL BUILDING, 89 LOCKHART ROAD, WAN CHAI, HONG KONG" />
        </div>
        <div className="bg-slate-100 rounded-lg h-72 flex flex-col items-center justify-center text-slate-400">
          <div style={{fontSize:40}}>📍</div>
          <p className="mt-5">此处加载交互式全球服务网点地图</p>
        </div>
      </section>
    </main>
  );

  const Member = () => (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-slate-800">会员方案</h1>
        <p className="mt-6 text-2xl text-slate-400">尊享增值服务，成就您的家庭健康屏障</p>
      </section>
      <section className="mt-14 grid lg:grid-cols-3 gap-10">
        <Price title="普通用户" price="" items={["提交远程图文问诊（30加元/次）","预约远程视频问诊（200加元/次）","国内预约挂号服务（250加元/次）"]}/>
        <Price highlight title="个人年度会员" price="1800 加元 / 年" items={["图文问诊服务10次","远程视频问诊预约3次","国内挂号预约服务2次","导医陪诊服务1次","回国项目选择1人次"]}/>
        <Price title="家庭年度会员" price="4800 加元 / 年" items={["图文问诊服务16次","远程视频问诊预约6次","国内挂号预约服务4次","导医陪诊服务3次","回国项目选择4人次"]}/>
      </section>
      <section className="mt-14 text-lg text-slate-600 leading-10">
        <p>* 除会员套餐赠送的次数外，额外增加服务次数，需额外收费。</p>
        <p>* 家庭成员可包括在国内的亲属，每个会员账户默认可以加入4位家庭成员。</p>
        <p>* 额外添加家庭成员：17岁及以下免费，18岁及以上每人每年费用为600加元。如不足一年加入，按每月50加元计算。</p>
      </section>
    </main>
  );

  return <div className="min-h-screen bg-white text-slate-900"><Nav />{page==='home'&&<Home />}{page==='services'&&<Services />}{page==='about'&&<About />}{page==='member'&&<Member />}<footer className="border-t py-8 text-center text-slate-400">© MediHome Global. Test version only.</footer></div>;
}

function ServiceCard({icon,title,text,featured,light}) {
  return <div className={`rounded-sm p-10 min-h-[270px] ${featured?'bg-[#8eafd1] text-white':light?'bg-[#fbf7ef] text-[#86a9cf]':'bg-slate-50 text-slate-900'}`}>
    <div className={`text-4xl ${featured?'text-[#c8a24a]':light?'text-[#075b96]':'text-[#169b8f]'}`}>{icon}</div>
    <h3 className="mt-8 text-3xl font-extrabold">{title}</h3>
    <p className={`mt-6 text-lg leading-8 ${featured?'text-white/90':light?'text-[#86a9cf]':'text-slate-700'}`}>{text}</p>
  </div>
}

function Benefit({title,text}) { return <div className="mt-8 flex gap-5"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d9f2ee] text-[#169b8f] font-bold">✓</span><div><h3 className="text-xl font-bold text-slate-900">{title}</h3><p className="mt-2 text-slate-600 leading-7">{text}</p></div></div> }
function FormField({label,value}) { return <label className="block"><div className="font-medium text-slate-700">{label}</div><select className="mt-4 w-full bg-slate-50 p-5 text-slate-600"><option>{value}</option></select></label> }
function AboutLine({title,text}) { return <div><h2 className="text-3xl font-extrabold text-[#075b96]">{title}</h2><p className="mt-6 text-2xl text-slate-400 leading-10">{text}</p></div> }
function Contact({label,text}) { return <div className="mt-8 grid grid-cols-[120px_1fr] gap-4 text-xl"><b className="text-slate-800">{label}</b><span className="text-slate-400 font-semibold">{text}</span></div> }
function Price({title,price,items,highlight}) { return <div className={`rounded-lg border ${highlight?'border-[#c8a24a] shadow-lg':'border-slate-400'} p-10 min-h-[430px] bg-white`}><h2 className="text-4xl font-extrabold text-slate-800">{title}</h2>{price && <p className="mt-8 text-4xl font-extrabold text-slate-800">{price}</p>}<div className="mt-10 text-xl text-slate-600 leading-10"><p className="font-bold">套餐包含：</p>{items.map((x)=><p key={x}>{x}</p>)}</div></div> }
