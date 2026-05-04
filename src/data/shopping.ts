import type { Scenario } from './types'

export const shopping: Scenario = {
  id: 'shopping',
  level: 'beginner',
  title: '쇼핑 / 면세',
  emoji: '🛍️',
  steps: [
    {
      id: 'shopping_C1',
      label: '사이즈 / 색상',
      expressions: [
        {
          id: 'shop_C1_01',
          scenario: 'shopping',
          step: 'C1',
          ja: 'Mサイズは ありますか',
          ko_pron: '에무사이즈와 아리마스카',
          ko: 'M사이즈 있나요?',
          chunks: [
            { ja: 'Mサイズは', ko_pron: '에무사이즈와', ko: 'M사이즈는' },
            { ja: 'ありますか', ko_pron: '아리마스카', ko: '있나요' },
          ],
          assembly: {
            ja: 'このTシャツの Mサイズは ありますか',
            ko: '이 티셔츠 M사이즈 있나요?',
            chunks: [
              { ja: 'このTシャツの', ko_pron: '코노 티샤츠노', ko: '이 티셔츠' },
              { ja: 'Mサイズは', ko_pron: '에무사이즈와', ko: 'M사이즈는' },
              { ja: 'ありますか', ko_pron: '아리마스카', ko: '있나요' },
            ],
          },
          distractors: [
            { ja: 'Lサイズは ありますか', ko_pron: '에루사이즈와 아리마스카', ko: 'L사이즈 있나요?' },
            { ja: 'ちがう いろは ありますか', ko_pron: '치가우 이로와 아리마스카', ko: '다른 색상 있나요?' },
            { ja: 'おおきい サイズは', ko_pron: '오—키— 사이즈와', ko: '큰 사이즈는요' },
          ],
          tip: 'S/M/L 사이즈를 각각 에스/에무/에루로 읽는다.',
          tags: ['쇼핑', '사이즈', '초급'],
        },
        {
          id: 'shop_C1_02',
          scenario: 'shopping',
          step: 'C1',
          ja: 'ちがう いろは ありますか',
          ko_pron: '치가우 이로와 아리마스카',
          ko: '다른 색상은 있나요?',
          chunks: [
            { ja: 'ちがう', ko_pron: '치가우', ko: '다른' },
            { ja: 'いろは', ko_pron: '이로와', ko: '색상은' },
            { ja: 'ありますか', ko_pron: '아리마스카', ko: '있나요' },
          ],
          assembly: {
            ja: 'くろい いろは ありますか',
            ko: '검은색 있나요?',
            chunks: [
              { ja: 'くろい', ko_pron: '쿠로이', ko: '검은' },
              { ja: 'いろは', ko_pron: '이로와', ko: '색은' },
              { ja: 'ありますか', ko_pron: '아리마스카', ko: '있나요' },
            ],
          },
          distractors: [
            { ja: 'くろは ありますか', ko_pron: '쿠로와 아리마스카', ko: '검은색 있나요?' },
            { ja: 'しろは ありますか', ko_pron: '시로와 아리마스카', ko: '흰색 있나요?' },
            { ja: 'このいろだけですか', ko_pron: '코노이로다케데스카', ko: '이 색만 있나요?' },
          ],
          tip: '색 이름: 쿠로(검정), 시로(흰색), 아오(파랑), 아카(빨강), 키(노랑), 미도리(초록).',
          tags: ['쇼핑', '색상', '초급'],
        },
      ],
    },
    {
      id: 'shopping_C2',
      label: '가격 / 할인',
      expressions: [
        {
          id: 'shop_C2_01',
          scenario: 'shopping',
          step: 'C2',
          ja: 'いくらですか',
          ko_pron: '이쿠라데스카',
          ko: '얼마예요?',
          chunks: [
            { ja: 'いくら', ko_pron: '이쿠라', ko: '얼마' },
            { ja: 'ですか', ko_pron: '데스카', ko: '예요' },
          ],
          assembly: {
            ja: 'ぜんぶで いくら ですか',
            ko: '전부 합쳐서 얼마예요?',
            chunks: [
              { ja: 'ぜんぶで', ko_pron: '젠부데', ko: '전부 합쳐서' },
              { ja: 'いくら', ko_pron: '이쿠라', ko: '얼마' },
              { ja: 'ですか', ko_pron: '데스카', ko: '예요' },
            ],
          },
          distractors: [
            { ja: 'やすくなりますか', ko_pron: '야스쿠 나리마스카', ko: '할인 되나요?' },
            { ja: 'たかいですね', ko_pron: '타카이데스네', ko: '비싸네요' },
            { ja: 'ぜいこみですか', ko_pron: '제—코미데스카', ko: '세금 포함인가요?' },
          ],
          tip: '일본은 소비세 10%가 별도 표기되는 경우가 있다. 제—코미(세금 포함)인지 확인하자.',
          tags: ['쇼핑', '가격', '초급'],
        },
        {
          id: 'shop_C2_02',
          scenario: 'shopping',
          step: 'C2',
          ja: 'わりびきは ありますか',
          ko_pron: '와리비키와 아리마스카',
          ko: '할인은 있나요?',
          chunks: [
            { ja: 'わりびきは', ko_pron: '와리비키와', ko: '할인은' },
            { ja: 'ありますか', ko_pron: '아리마스카', ko: '있나요' },
          ],
          assembly: {
            ja: 'カード わりびきは ありますか',
            ko: '카드 할인은 있나요?',
            chunks: [
              { ja: 'カード', ko_pron: '카—도', ko: '카드' },
              { ja: 'わりびきは', ko_pron: '와리비키와', ko: '할인은' },
              { ja: 'ありますか', ko_pron: '아리마스카', ko: '있나요' },
            ],
          },
          distractors: [
            { ja: 'セールは いつですか', ko_pron: '세—루와 이츠데스카', ko: '세일은 언제예요?' },
            { ja: 'クーポンは ありますか', ko_pron: '쿠—폰와 아리마스카', ko: '쿠폰은 있나요?' },
            { ja: 'もっと やすいものは', ko_pron: '못토 야스이 모노와', ko: '더 저렴한 건요' },
          ],
          tags: ['쇼핑', '할인', '초급'],
        },
      ],
    },
    {
      id: 'shopping_C3',
      label: '면세',
      expressions: [
        {
          id: 'shop_C3_01',
          scenario: 'shopping',
          step: 'C3',
          ja: 'めんぜい できますか',
          ko_pron: '멘제— 데키마스카',
          ko: '면세 가능한가요?',
          chunks: [
            { ja: 'めんぜい', ko_pron: '멘제—', ko: '면세' },
            { ja: 'できますか', ko_pron: '데키마스카', ko: '가능한가요' },
          ],
          assembly: {
            ja: 'これは めんぜい できますか',
            ko: '이건 면세 가능한가요?',
            chunks: [
              { ja: 'これは', ko_pron: '코레와', ko: '이건' },
              { ja: 'めんぜい', ko_pron: '멘제—', ko: '면세' },
              { ja: 'できますか', ko_pron: '데키마스카', ko: '가능한가요' },
            ],
          },
          distractors: [
            { ja: 'かんこくじんです', ko_pron: '칸코쿠진데스', ko: '한국인이에요' },
            { ja: 'パスポートを みせます', ko_pron: '파스포—토오 미세마스', ko: '여권 보여드릴게요' },
            { ja: 'ぜいきんを かえしてください', ko_pron: '제—킨오 카에시테 쿠다사이', ko: '세금 돌려주세요' },
          ],
          tip: '여권을 함께 제시하면 면세 처리가 빠르다. 5,000엔 이상 구매 시 면세 가능한 경우가 많다.',
          tags: ['쇼핑', '면세', '초급'],
        },
      ],
    },
    {
      id: 'shopping_C4',
      label: '결제',
      expressions: [
        {
          id: 'shop_C4_01',
          scenario: 'shopping',
          step: 'C4',
          ja: 'カードで おねがいします',
          ko_pron: '카—도데 오네가이시마스',
          ko: '카드로 할게요',
          chunks: [
            { ja: 'カードで', ko_pron: '카—도데', ko: '카드로' },
            { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '할게요' },
          ],
          assembly: {
            ja: 'カードで いちまい おねがいします',
            ko: '카드 한 장으로 해주세요',
            chunks: [
              { ja: 'カードで', ko_pron: '카—도데', ko: '카드로' },
              { ja: 'いちまい', ko_pron: '이치마이', ko: '한 장으로' },
              { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '해주세요' },
            ],
          },
          distractors: [
            { ja: 'げんきんで おねがいします', ko_pron: '겐킨데 오네가이시마스', ko: '현금으로 할게요' },
            { ja: 'べつべつに おねがいします', ko_pron: '베츠베츠니 오네가이시마스', ko: '따로따로 해주세요' },
            { ja: 'いっしょに おねがいします', ko_pron: '잇쇼니 오네가이시마스', ko: '같이 계산해주세요' },
          ],
          tags: ['쇼핑', '결제', '초급'],
        },
        {
          id: 'shop_C4_02',
          scenario: 'shopping',
          step: 'C4',
          ja: 'レシートを ください',
          ko_pron: '레시—토오 쿠다사이',
          ko: '영수증 주세요',
          chunks: [
            { ja: 'レシートを', ko_pron: '레시—토오', ko: '영수증을' },
            { ja: 'ください', ko_pron: '쿠다사이', ko: '주세요' },
          ],
          assembly: {
            ja: 'レシートと ふくろを ください',
            ko: '영수증이랑 봉투 주세요',
            chunks: [
              { ja: 'レシートと', ko_pron: '레시—토토', ko: '영수증이랑' },
              { ja: 'ふくろを', ko_pron: '후쿠로오', ko: '봉투를' },
              { ja: 'ください', ko_pron: '쿠다사이', ko: '주세요' },
            ],
          },
          distractors: [
            { ja: 'ふくろを ください', ko_pron: '후쿠로오 쿠다사이', ko: '봉투 주세요' },
            { ja: 'レシートは いりません', ko_pron: '레시—토와 이리마셍', ko: '영수증은 필요없어요' },
            { ja: 'めいさいしょを ください', ko_pron: '메—사이쇼오 쿠다사이', ko: '명세서 주세요' },
          ],
          tip: '일본은 비닐봉투가 유료인 경우가 많다. 필요 없으면 "후쿠로와 이리마셍"이라고 하면 된다.',
          tags: ['쇼핑', '결제', '초급'],
        },
      ],
    },
  ],
}
