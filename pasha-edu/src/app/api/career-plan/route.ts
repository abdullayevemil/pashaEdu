import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const selections = await req.json();

    const prompt = `
Sen bir kariyer planlama uzmanısın. Kullanıcının aşağıdaki seçimlerine dayanarak detaylı, yapılandırılmış bir kariyer yol haritası oluştur:
${JSON.stringify(selections, null, 2)}

Dikey bir yol haritası UI’sine uygun, backend için hazır, tam yapılandırılmış veri üretmek için aşağıdaki talimatları uygula:

1. **Çıktı Yapısı**: Planı kesin başlıklarla böl:
   - "Kariyer Hedefi"
   - "Önerilen Roller"
   - "Öğrenilecek En Önemli Beceriler"
   - "Alınacak Sertifikalar"
   - "Alınacak Kurslar"
   - "Burslar veya Fırsatlar"
   - "Önerilen Mentorlar / Ağ Kurma"
   - "Adım Adım Yol Haritası"

2. **Adım Adım Yol Haritası**:
   - Numaralandırılmış adımlar listesi.
   - Her adım şunları içermelidir:
     - Beceri, sertifika, kurs veya kilometre taşı.
     - Önerilen tamamlanma tarihi (örn. "MM/YYYY tarihine kadar tamamla").
     - Opsiyonel not: uygulanabilir tavsiye.
   - Örnek format: "Adım 1: [Kurs Adı] tamamlayarak [Beceri] geliştir. Son Tarih: MM/YYYY."

3. **Alınacak Kurslar**:
   - Kurs adı + platform + **doğrudan URL**.
   - Mevcutsa tahmini süre (örn. "4 hafta").

4. **Alınacak Sertifikalar**:
   - Sertifika adı + veren kurum + **önerilen tamamlanma tarihi**.

5. **Burslar veya Fırsatlar**:
   - Başvuru son tarihlerini veya uygunluk dönemlerini ekle.

6. **Mentor Önerileri**:
   - 1–3 mentor rolü örneği.
   - Kısa uzmanlık açıklaması.

7. **Kart Dostu & Parse Edilebilir Format**:
   - Her bölüm **çift satır boşluğu (\n\n)** ile ayrılmalı.
   - Gerektiğinde madde işaretleri kullan.
   - Her bölüm maksimum 4–5 satır.
   - JSON, HTML veya Markdown kullanma.
   - Çıktı kısa, uygulanabilir ve UI tarafından doğrudan render edilebilir olmalı.

8. **Ton**:
   - Profesyonel, motive edici ve net.
   - Gerçekçi son tarihlerle uygulanabilir adımlara odaklan.

Örnek çıktı:

Kariyer Hedefi:
Yapay Zeka ve Makine Öğrenimi alanında uzmanlaşmış Yazılım Geliştirici olmak.

Önerilen Roller:
- Yapay Zeka Mühendisi
- Veri Bilimci
- Makine Öğrenimi Geliştiricisi

Öğrenilecek En Önemli Beceriler:
- Python programlama
- Veri analizi
- Makine öğrenimi algoritmaları

Alınacak Sertifikalar:
- Google AI Sertifikası, Google, Son Tarih: 06/2025
- AWS Makine Öğrenimi Uzmanlığı, AWS, Son Tarih: 08/2025
- Microsoft Azure AI Mühendisi, Microsoft, Son Tarih: 09/2025

Alınacak Kurslar:
- Coursera: Machine Learning by Andrew Ng, 11 hafta, https://www.coursera.org/learn/machine-learning
- Udemy: Deep Learning A-Z, 40 saat, https://www.udemy.com/course/deeplearning/
- edX: AI Fundamentals, 6 hafta, https://www.edx.org/course/ai-fundamentals

Adım Adım Yol Haritası:
Adım 1: "Python for Data Science" kursunu tamamlayarak temel programlama becerilerini geliştir. Son Tarih: 04/2025
Adım 2: Google AI Sertifikasını alarak AI yetkinliğini göster. Son Tarih: 06/2025
Adım 3: "Machine Learning by Andrew Ng" kursunu tamamlayarak pratik ML deneyimi kazan. Son Tarih: 06/2025
...

Plan Sonu.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const plan = completion.choices[0].message?.content;

    return NextResponse.json({ plan });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to generate career plan" },
      { status: 500 }
    );
  }
}
