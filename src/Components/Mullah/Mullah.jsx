import React from 'react';
import './Mullah.css';
import AboutImg from "../../assets/myhPic.jpg";


const Mullah = () => {
    return (
        <>
            <section className="about section" id="about">
                <h2 className="section__title">🏳 Rebuild Khilafat 🏴</h2>
                {/* <h3 className="section__subtitle">ملا جین مجاہد</h3> */}
                <span className="section__subtitle">Mullah Zain Mujahid</span>

                <div className="about__container container grid">
                    <img src={AboutImg} alt="" className="about__img" />

                    <div className="about__data">
                        <div>
                            <div>Unapolegetic Muslim - Anti-Islamophobic</div>
                        </div>
                        <p className="about__description" style={{ padding: "0" }}>
                            Currently pursuing a degree in law(LLB), My aim to integrate your technical skills with a comprehensive understanding of legal frameworks. This unique combination enables you to approach challenges with a multifaceted perspective, bridging technology and social justice. Dedicated to continuous growth, you are committed to using your skills to address real-world issues and drive meaningful impact.
                        </p>
                    </div>
                </div>

                <div className="container">
                    Im a passionate Islamic student activist devoted to advocating for justice and dignity for Muslims worldwide. Your work emphasizes exposing the hypocrisy of a world where Muslims often face oppression, discrimination, and violence in regions like Kashmir, Gaza, India, Myanmar, and China. You highlight the stark contrast between the teachings of Islam, which promote peace and justice, and the atrocities committed by oppressors who falsely label Muslims as perpetrators of hate.

                    As a supporter of the reestablishment of the Khilafat, you believe in fostering a governance system that upholds the principles of justice, equality, and accountability. In Islam, justice transcends religious boundaries, ensuring that every individual, Muslim or non-Muslim, is held accountable for their actions under a fair judicial system. You work tirelessly to challenge injustice, inspire unity, and promote the values of Islam, standing against oppression while advocating for global peace and harmony.
                </div>
            </section>
        </>
    );
}

export default Mullah
