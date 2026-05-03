import type { Scenario } from './types'

export const restaurant: Scenario = {
  id: 'restaurant',
  level: 'beginner',
  title: '식당 / 카페',
  emoji: '🍜',
  steps: [
    {
      id: 'restaurant_A0',
      label: '기본 인사 & 호출',
      expressions: [
        {
          id: 'rest_A0_01',
          scenario: 'restaurant',
          step: 'A0',
          ja: 'すみません',
          ko_pron: '스미마셍',
          ko: '저기요',
          chunks: [
            { ja: 'すみません', ko_pron: '스미마셍', ko: '저기요' },
          ],
          assembly: {
            ja: 'すみません、ちゅうもんを おねがいします',
            ko: '저기요, 주문 부탁합니다',
            chunks: [
              { ja: 'すみません', ko_pron: '스미마셍', ko: '저기요' },
              { ja: 'ちゅうもんを', ko_pron: '추—몽오', ko: '주문을' },
              { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '부탁합니다' },
            ],
          },
          distractors: [
            { ja: 'ありがとうございます', ko_pron: '아리가토—고자이마스', ko: '감사합니다' },
            { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '부탁합니다' },
            { ja: 'だいじょうぶです', ko_pron: '다이조—부데스', ko: '괜찮아요' },
          ],
          tip: '일본에서 가장 많이 쓰는 말. 직원 부를 때, 사과할 때, 감사 표현에도 모두 쓴다.',
          tags: ['식당', '기본', '초급'],
        },
        {
          id: 'rest_A0_02',
          scenario: 'restaurant',
          step: 'A0',
          ja: 'ありがとうございます',
          ko_pron: '아리가토—고자이마스',
          ko: '감사합니다',
          chunks: [
            { ja: 'ありがとうございます', ko_pron: '아리가토—고자이마스', ko: '감사합니다' },
          ],
          assembly: {
            ja: 'どうも ありがとうございました',
            ko: '정말 감사했습니다',
            chunks: [
              { ja: 'どうも', ko_pron: '도—모', ko: '정말' },
              { ja: 'ありがとうございました', ko_pron: '아리가토—고자이마시타', ko: '감사했습니다' },
            ],
          },
          distractors: [
            { ja: 'すみません', ko_pron: '스미마셍', ko: '저기요' },
            { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '부탁합니다' },
            { ja: 'どういたしまして', ko_pron: '도—이타시마시테', ko: '천만에요' },
          ],
          tip: '친근하게는 아리가토—, 식사 후 나올 때는 아리가토— 고자이마시타(과거형).',
          tags: ['식당', '기본', '초급'],
        },
      ],
    },
    {
      id: 'restaurant_A1',
      label: '입장 / 인원수',
      expressions: [
        {
          id: 'rest_A1_01',
          scenario: 'restaurant',
          step: 'A1',
          ja: 'ふたりです',
          ko_pron: '후타리데스',
          ko: '두 명입니다',
          chunks: [
            { ja: 'ふたり', ko_pron: '후타리', ko: '두 명' },
            { ja: 'です', ko_pron: '데스', ko: '입니다' },
          ],
          assembly: {
            ja: 'ふたりなんですが、いいですか',
            ko: '두 명인데요, 괜찮나요?',
            chunks: [
              { ja: 'ふたりなんですが', ko_pron: '후타리난데스가', ko: '두 명인데요' },
              { ja: 'いいですか', ko_pron: '이이데스카', ko: '괜찮나요' },
            ],
          },
          distractors: [
            { ja: 'ひとりです', ko_pron: '히토리데스', ko: '한 명입니다' },
            { ja: 'みっつです', ko_pron: '밋츠데스', ko: '세 개입니다' },
            { ja: 'よにんです', ko_pron: '요닌데스', ko: '네 명입니다' },
          ],
          tip: '손가락으로 인원수를 함께 표시하면 더 확실하게 전달된다.',
          tags: ['식당', '입장', '초급'],
        },
        {
          id: 'rest_A1_02',
          scenario: 'restaurant',
          step: 'A1',
          ja: 'よやくしています',
          ko_pron: '요야쿠 시테이마스',
          ko: '예약했어요',
          chunks: [
            { ja: 'よやく', ko_pron: '요야쿠', ko: '예약' },
            { ja: 'しています', ko_pron: '시테이마스', ko: '하고 있어요' },
          ],
          assembly: {
            ja: 'キムで よやくしています',
            ko: '김으로 예약했어요',
            chunks: [
              { ja: 'キムで', ko_pron: '키무데', ko: '김으로' },
              { ja: 'よやく', ko_pron: '요야쿠', ko: '예약' },
              { ja: 'しています', ko_pron: '시테이마스', ko: '했어요' },
            ],
          },
          distractors: [
            { ja: 'よやくなしです', ko_pron: '요야쿠나시데스', ko: '예약 없어요' },
            { ja: 'まっています', ko_pron: '맛테이마스', ko: '기다리고 있어요' },
            { ja: 'はじめてです', ko_pron: '하지메테데스', ko: '처음이에요' },
          ],
          tags: ['식당', '입장', '초급'],
        },
      ],
    },
    {
      id: 'restaurant_A2',
      label: '메뉴 묻기',
      expressions: [
        {
          id: 'rest_A2_01',
          scenario: 'restaurant',
          step: 'A2',
          ja: 'おすすめは なんですか',
          ko_pron: '오스스메와 난데스카',
          ko: '추천 메뉴는 뭔가요?',
          chunks: [
            { ja: 'おすすめは', ko_pron: '오스스메와', ko: '추천은' },
            { ja: 'なんですか', ko_pron: '난데스카', ko: '뭔가요' },
          ],
          assembly: {
            ja: 'きょうの おすすめは なんですか',
            ko: '오늘의 추천은 뭔가요?',
            chunks: [
              { ja: 'きょうの', ko_pron: '쿄—노', ko: '오늘의' },
              { ja: 'おすすめは', ko_pron: '오스스메와', ko: '추천은' },
              { ja: 'なんですか', ko_pron: '난데스카', ko: '뭔가요' },
            ],
          },
          distractors: [
            { ja: 'これをください', ko_pron: '코레오 쿠다사이', ko: '이거 주세요' },
            { ja: 'いくらですか', ko_pron: '이쿠라데스카', ko: '얼마예요?' },
            { ja: 'おいしいですか', ko_pron: '오이시—데스카', ko: '맛있나요?' },
          ],
          tip: '메뉴판을 보여주며 물어보면 점원이 바로 이해한다.',
          tags: ['식당', '메뉴', '초급'],
        },
        {
          id: 'rest_A2_02',
          scenario: 'restaurant',
          step: 'A2',
          ja: 'メニューを みせてください',
          ko_pron: '메뉴—오 미세테 쿠다사이',
          ko: '메뉴판 보여주세요',
          chunks: [
            { ja: 'メニューを', ko_pron: '메뉴—오', ko: '메뉴판을' },
            { ja: 'みせてください', ko_pron: '미세테 쿠다사이', ko: '보여주세요' },
          ],
          assembly: {
            ja: 'えいごの メニューを みせてください',
            ko: '영어 메뉴판 보여주세요',
            chunks: [
              { ja: 'えいごの', ko_pron: '에—고노', ko: '영어' },
              { ja: 'メニューを', ko_pron: '메뉴—오', ko: '메뉴판을' },
              { ja: 'みせてください', ko_pron: '미세테 쿠다사이', ko: '보여주세요' },
            ],
          },
          distractors: [
            { ja: 'もってきてください', ko_pron: '못테키테 쿠다사이', ko: '가져다 주세요' },
            { ja: 'かいてください', ko_pron: '카이테 쿠다사이', ko: '써주세요' },
            { ja: 'よんでください', ko_pron: '욘데 쿠다사이', ko: '읽어주세요' },
          ],
          tags: ['식당', '메뉴', '초급'],
        },
      ],
    },
    {
      id: 'restaurant_A3',
      label: '주문',
      expressions: [
        {
          id: 'rest_A3_01',
          scenario: 'restaurant',
          step: 'A3',
          ja: 'これをください',
          ko_pron: '코레오 쿠다사이',
          ko: '이거 주세요',
          chunks: [
            { ja: 'これを', ko_pron: '코레오', ko: '이것을' },
            { ja: 'ください', ko_pron: '쿠다사이', ko: '주세요' },
          ],
          assembly: {
            ja: 'これを ふたつ ください',
            ko: '이거 두 개 주세요',
            chunks: [
              { ja: 'これを', ko_pron: '코레오', ko: '이것을' },
              { ja: 'ふたつ', ko_pron: '후타츠', ko: '두 개' },
              { ja: 'ください', ko_pron: '쿠다사이', ko: '주세요' },
            ],
          },
          distractors: [
            { ja: 'あれをください', ko_pron: '아레오 쿠다사이', ko: '저거 주세요' },
            { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '부탁합니다' },
            { ja: 'ありがとう', ko_pron: '아리가또—', ko: '감사합니다' },
          ],
          tip: '메뉴판을 손가락으로 가리키며 말하면 가장 자연스럽다.',
          tags: ['식당', '주문', '초급'],
        },
        {
          id: 'rest_A3_02',
          scenario: 'restaurant',
          step: 'A3',
          ja: 'ラーメンを ふたつ ください',
          ko_pron: '라—멘오 후타츠 쿠다사이',
          ko: '라멘 두 개 주세요',
          chunks: [
            { ja: 'ラーメンを', ko_pron: '라—멘오', ko: '라멘을' },
            { ja: 'ふたつ', ko_pron: '후타츠', ko: '두 개' },
            { ja: 'ください', ko_pron: '쿠다사이', ko: '주세요' },
          ],
          assembly: {
            ja: 'ラーメンを ふたつと みずを ください',
            ko: '라멘 두 개랑 물 주세요',
            chunks: [
              { ja: 'ラーメンを', ko_pron: '라—멘오', ko: '라멘을' },
              { ja: 'ふたつと', ko_pron: '후타츠토', ko: '두 개랑' },
              { ja: 'みずを', ko_pron: '미즈오', ko: '물을' },
              { ja: 'ください', ko_pron: '쿠다사이', ko: '주세요' },
            ],
          },
          distractors: [
            { ja: 'ラーメンを ひとつ', ko_pron: '라—멘오 히토츠', ko: '라멘 한 개' },
            { ja: 'うどんを ください', ko_pron: '우동오 쿠다사이', ko: '우동 주세요' },
            { ja: 'ラーメンを みっつ', ko_pron: '라—멘오 밋츠', ko: '라멘 세 개' },
          ],
          tags: ['식당', '주문', '초급'],
        },
      ],
    },
    {
      id: 'restaurant_A4',
      label: '옵션 조절',
      expressions: [
        {
          id: 'rest_A4_01',
          scenario: 'restaurant',
          step: 'A4',
          ja: 'からくしないで ください',
          ko_pron: '카라쿠시나이데 쿠다사이',
          ko: '맵지 않게 해주세요',
          chunks: [
            { ja: 'からくしないで', ko_pron: '카라쿠시나이데', ko: '맵지 않게' },
            { ja: 'ください', ko_pron: '쿠다사이', ko: '해주세요' },
          ],
          assembly: {
            ja: 'できれば からくしないで ください',
            ko: '가능하면 맵지 않게 해주세요',
            chunks: [
              { ja: 'できれば', ko_pron: '데키레바', ko: '가능하면' },
              { ja: 'からくしないで', ko_pron: '카라쿠시나이데', ko: '맵지 않게' },
              { ja: 'ください', ko_pron: '쿠다사이', ko: '해주세요' },
            ],
          },
          distractors: [
            { ja: 'からくして ください', ko_pron: '카라쿠시테 쿠다사이', ko: '맵게 해주세요' },
            { ja: 'あまくして ください', ko_pron: '아마쿠시테 쿠다사이', ko: '달게 해주세요' },
            { ja: 'すくなくして ください', ko_pron: '스쿠나쿠시테 쿠다사이', ko: '적게 해주세요' },
          ],
          tags: ['식당', '옵션', '초급'],
        },
        {
          id: 'rest_A4_02',
          scenario: 'restaurant',
          step: 'A4',
          ja: 'にくぬきで',
          ko_pron: '니쿠누키데',
          ko: '고기 빼고요',
          chunks: [
            { ja: 'にく', ko_pron: '니쿠', ko: '고기' },
            { ja: 'ぬきで', ko_pron: '누키데', ko: '빼고' },
          ],
          assembly: {
            ja: 'にく ぬきで おねがいします',
            ko: '고기 빼고 부탁합니다',
            chunks: [
              { ja: 'にく', ko_pron: '니쿠', ko: '고기' },
              { ja: 'ぬきで', ko_pron: '누키데', ko: '빼고' },
              { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '부탁합니다' },
            ],
          },
          distractors: [
            { ja: 'たまごぬきで', ko_pron: '타마고누키데', ko: '계란 빼고요' },
            { ja: 'にくいりで', ko_pron: '니쿠이리데', ko: '고기 넣어서요' },
            { ja: 'やさいぬきで', ko_pron: '야사이누키데', ko: '야채 빼고요' },
          ],
          tip: '~누키데 는 "~ 빼고"를 뜻하는 표현. 어떤 재료든 앞에 붙일 수 있다.',
          tags: ['식당', '옵션', '초급'],
        },
      ],
    },
    {
      id: 'restaurant_A5',
      label: '계산',
      expressions: [
        {
          id: 'rest_A5_01',
          scenario: 'restaurant',
          step: 'A5',
          ja: 'おかいけい おねがいします',
          ko_pron: '오카이케— 오네가이시마스',
          ko: '계산해주세요',
          chunks: [
            { ja: 'おかいけい', ko_pron: '오카이케—', ko: '계산' },
            { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '부탁합니다' },
          ],
          assembly: {
            ja: 'すみません、おかいけい おねがいします',
            ko: '저기요, 계산해주세요',
            chunks: [
              { ja: 'すみません', ko_pron: '스미마셍', ko: '저기요' },
              { ja: 'おかいけい', ko_pron: '오카이케—', ko: '계산' },
              { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '해주세요' },
            ],
          },
          distractors: [
            { ja: 'レシートをください', ko_pron: '레시—토오 쿠다사이', ko: '영수증 주세요' },
            { ja: 'べつべつに ください', ko_pron: '베츠베츠니 쿠다사이', ko: '따로따로 해주세요' },
            { ja: 'まだ だいじょうぶです', ko_pron: '마다 다이조부데스', ko: '아직 괜찮아요' },
          ],
          tip: '손을 들고 말하거나, 공중에 사인하는 제스처를 함께 하면 바로 통한다.',
          tags: ['식당', '계산', '초급'],
        },
        {
          id: 'rest_A5_02',
          scenario: 'restaurant',
          step: 'A5',
          ja: 'カードで おねがいします',
          ko_pron: '카—도데 오네가이시마스',
          ko: '카드로 할게요',
          chunks: [
            { ja: 'カードで', ko_pron: '카—도데', ko: '카드로' },
            { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '할게요' },
          ],
          assembly: {
            ja: 'カードで べつべつに おねがいします',
            ko: '카드로 따로따로 해주세요',
            chunks: [
              { ja: 'カードで', ko_pron: '카—도데', ko: '카드로' },
              { ja: 'べつべつに', ko_pron: '베츠베츠니', ko: '따로따로' },
              { ja: 'おねがいします', ko_pron: '오네가이시마스', ko: '해주세요' },
            ],
          },
          distractors: [
            { ja: 'げんきんで おねがいします', ko_pron: '겐킨데 오네가이시마스', ko: '현금으로 할게요' },
            { ja: 'PayPayで', ko_pron: '페이페이데', ko: '페이페이로요' },
            { ja: 'いっしょに おねがいします', ko_pron: '잇쇼니 오네가이시마스', ko: '같이 계산해주세요' },
          ],
          tags: ['식당', '계산', '초급'],
        },
      ],
    },
  ],
}
