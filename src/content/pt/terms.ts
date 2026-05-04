import type { PageContent } from '../types'

const terms: PageContent = {
  title: 'Termos de Utilização e Venda',
  lastUpdatedISO: '2026-05-03',
  intro: [
    {
      kind: 'p',
      html: 'Estes Termos de Utilização e Venda (os "Termos") regem o seu acesso e utilização da Gourmetpedia (a "Aplicação"), incluindo a versão gratuita e qualquer subscrição paga oferecida na Aplicação.',
    },
    {
      kind: 'p',
      html: 'A Aplicação é operada por <strong>Quentin Tusset</strong>, com sede em Liège, Bélgica ("nós", "nos" ou "nosso"). Ao criar uma conta, utilizar a Aplicação ou adquirir uma subscrição, aceita estes Termos. Caso não concorde, não deve utilizar a Aplicação.',
    },
  ],
  sections: [
    {
      id: 'about-gourmetpedia',
      title: '1. Sobre a Gourmetpedia',
      blocks: [
        {
          kind: 'p',
          html: 'A Gourmetpedia é uma aplicação que permite aos utilizadores guardar, organizar e consultar receitas encontradas online, incluindo receitas encontradas no Instagram, TikTok e outras plataformas de redes sociais. A Aplicação permite ainda aos utilizadores criar, armazenar, sincronizar e partilhar receitas.',
        },
        {
          kind: 'p',
          html: 'A Gourmetpedia não é afiliada, apoiada ou patrocinada pelo Instagram, TikTok, Meta, ByteDance ou qualquer outra plataforma de redes sociais ou website terceiro.',
        },
      ],
    },
    {
      id: 'contact-and-operator',
      title: '2. Informações de contacto e do operador',
      blocks: [
        { kind: 'p', html: 'A Aplicação é operada por:' },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Liège, Bélgica<br>Email: <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'Se tiver questões sobre estes Termos, a sua conta ou a sua subscrição, pode contactar-nos através de <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>.',
        },
      ],
    },
    {
      id: 'account-registration',
      title: '3. Registo de conta',
      blocks: [
        {
          kind: 'p',
          html: 'É necessária uma conta de utilizador para utilizar a Aplicação. Quando cria uma conta, deve fornecer informações exatas e atualizadas, incluindo o seu endereço de email e o primeiro e último nome.',
        },
        {
          kind: 'p',
          html: 'É responsável por manter as suas credenciais de início de sessão confidenciais e por toda a atividade que ocorra através da sua conta. Deve notificar-nos imediatamente se acreditar que a sua conta foi acedida sem autorização.',
        },
        {
          kind: 'p',
          html: 'A Aplicação destina-se a um público em geral. Se tem idade inferior à exigida por lei para celebrar estes Termos no seu país, pode utilizar a Aplicação apenas com a autorização e supervisão de um progenitor ou tutor legal.',
        },
      ],
    },
    {
      id: 'free-version',
      title: '4. Versão gratuita',
      blocks: [
        {
          kind: 'p',
          html: 'A Gourmetpedia oferece uma versão gratuita da Aplicação. Na versão gratuita, os utilizadores podem guardar até <strong>10 receitas</strong>. Podem aplicar-se limites adicionais ou restrições técnicas conforme indicado na Aplicação.',
        },
        {
          kind: 'p',
          html: 'Podemos alterar as funcionalidades ou os limites da versão gratuita ocasionalmente. Quaisquer alterações deste tipo não afetarão os seus direitos imperativos enquanto consumidor.',
        },
      ],
    },
    {
      id: 'premium-subscription',
      title: '5. Subscrição Gourmetpedia Premium',
      blocks: [
        {
          kind: 'p',
          html: 'A Gourmetpedia pode oferecer uma subscrição paga, atualmente apresentada como uma subscrição de receitas ilimitadas. As funcionalidades premium incluem atualmente:',
        },
        {
          kind: 'ul',
          items: [
            'receitas ilimitadas na sua biblioteca;',
            'sincronização segura entre vários dispositivos;',
            'acesso a outras funcionalidades premium apresentadas na Aplicação, caso existam.',
          ],
        },
        { kind: 'p', html: 'As opções de subscrição atualmente apresentadas na Aplicação são:' },
        {
          kind: 'ul',
          items: [
            '<strong>Subscrição mensal:</strong> USD 2,99 por mês;',
            '<strong>Subscrição anual:</strong> USD 19,99 por ano.',
          ],
        },
        {
          kind: 'p',
          html: 'Os preços podem variar consoante o país, moeda, impostos, taxas de plataforma, promoções ou definições da loja. O preço final, o período de faturação e os impostos aplicáveis são apresentados no checkout da Apple App Store ou Google Play antes de confirmar a compra. Caso exista diferença entre o preço apresentado neste documento e o preço apresentado no checkout da loja, prevalece o preço do checkout da loja para a transação.',
        },
      ],
    },
    {
      id: 'payment-processing',
      title: '6. Processamento de pagamentos',
      blocks: [
        {
          kind: 'p',
          html: 'Todas as compras dentro da aplicação e subscrições são processadas pela plataforma através da qual adquiriu a subscrição, seja a Apple App Store ou a Google Play. Não recolhemos nem armazenamos diretamente os dados completos do seu cartão de pagamento.',
        },
        {
          kind: 'p',
          html: 'Ao adquirir uma subscrição através da Apple ou da Google, aceita também os termos aplicáveis da Apple App Store ou Google Play, as regras de pagamento, as regras de faturação e as políticas de reembolso.',
        },
        {
          kind: 'p',
          html: 'A Aplicação utiliza o RevenueCat para ajudar a gerir o estado da subscrição, os direitos de compra e o restauro de compras. A Aplicação pode ainda utilizar o Firebase para conta, autenticação, armazenamento, sincronização e serviços de backend relacionados.',
        },
      ],
    },
    {
      id: 'auto-renewal-and-cancellation',
      title: '7. Renovação automática e cancelamento',
      blocks: [
        {
          kind: 'p',
          html: 'As subscrições renovam-se automaticamente, salvo se forem canceladas através da Apple App Store ou Google Play antes do final do período de faturação em curso, de acordo com as regras da plataforma utilizada para a compra.',
        },
        {
          kind: 'p',
          html: 'É responsável por cancelar a sua subscrição através da mesma plataforma onde a adquiriu. A eliminação da Aplicação ou a eliminação da sua conta Gourmetpedia <strong>não</strong> cancela automaticamente a sua subscrição na Apple App Store ou Google Play.',
        },
        { kind: 'h3', text: 'Como cancelar' },
        {
          kind: 'ul',
          items: [
            '<strong>Apple App Store:</strong> abra a aplicação Definições no seu dispositivo Apple, toque no nome da sua Conta Apple, aceda a Subscrições, selecione Gourmetpedia e cancele a subscrição. A Apple também disponibiliza apoio para subscrições em <a href="https://support.apple.com/billing">support.apple.com/billing</a>.',
            '<strong>Google Play:</strong> abra a Google Play, aceda a Pagamentos e subscrições ou Subscrições, selecione Gourmetpedia e cancele a subscrição. A Google também disponibiliza apoio para subscrições em <a href="https://support.google.com/googleplay">support.google.com/googleplay</a>.',
          ],
        },
        {
          kind: 'p',
          html: 'Após o cancelamento, poderá continuar a aceder às funcionalidades pagas até ao final do período de faturação pago em curso, salvo se a plataforma indicar o contrário.',
        },
      ],
    },
    {
      id: 'refunds',
      title: '8. Reembolsos',
      blocks: [
        {
          kind: 'p',
          html: 'Os reembolsos relativos a compras efetuadas através da Apple App Store ou Google Play são tratados pela Apple ou Google de acordo com as suas próprias políticas de reembolso e legislação aplicável. Não podemos emitir diretamente reembolsos para compras processadas pela Apple ou Google.',
        },
        {
          kind: 'p',
          html: 'Se considera que existiu um erro de faturação, contacte a Apple ou Google através do canal de apoio relevante da plataforma. Pode também contactar-nos através de <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>, mas as compras através da plataforma permanecem sujeitas ao processo de reembolso da plataforma.',
        },
      ],
    },
    {
      id: 'right-of-withdrawal',
      title: '9. Direito de livre resolução para consumidores',
      blocks: [
        {
          kind: 'p',
          html: 'Se for um consumidor situado no Espaço Económico Europeu ou noutra jurisdição com regras de proteção do consumidor semelhantes, poderá ter um direito legal de livre resolução para determinados contratos à distância.',
        },
        {
          kind: 'p',
          html: 'Uma vez que as subscrições Gourmetpedia proporcionam acesso imediato a serviços digitais e funcionalidades premium, ao confirmar a sua compra e utilizar funcionalidades premium, solicita a execução imediata do serviço. Na medida do permitido pela legislação aplicável, reconhece que o seu direito de livre resolução pode ficar limitado ou caducar a partir do momento em que o serviço digital tenha começado.',
        },
        {
          kind: 'p',
          html: 'Esta secção não limita quaisquer direitos imperativos do consumidor de que possa beneficiar ao abrigo da legislação aplicável. Os pedidos de reembolso ou de livre resolução relativos a subscrições adquiridas através da Apple ou Google devem, regra geral, ser submetidos através da plataforma relevante, salvo disposição em contrário da legislação aplicável.',
        },
      ],
    },
    {
      id: 'user-recipes',
      title: '10. Receitas do utilizador e conteúdos partilhados',
      blocks: [
        {
          kind: 'p',
          html: 'Pode adicionar, guardar, organizar, editar e partilhar receitas através da Aplicação. Tal inclui títulos de receitas, ligações, URLs de origem, ingredientes, instruções, notas, categorias, imagens e outras informações que opte por introduzir, sempre que suportado pela Aplicação.',
        },
        {
          kind: 'p',
          html: 'Continua a ser responsável por todos os conteúdos que adiciona à Aplicação. Deve assegurar que tem o direito de guardar, utilizar, carregar ou partilhar qualquer receita, texto, imagem, ligação ou outro conteúdo que adicione. Não deve utilizar a Aplicação para armazenar ou partilhar conteúdos ilícitos, prejudiciais, infratores, enganosos, confidenciais ou não autorizados.',
        },
        {
          kind: 'p',
          html: 'Ao adicionar conteúdos à Aplicação, concede-nos uma licença limitada, não exclusiva, mundial e isenta de royalties para alojar, armazenar, copiar, exibir, formatar, sincronizar, transmitir e processar esses conteúdos apenas na medida necessária para operar, proteger, fornecer e melhorar a Aplicação. Se partilhar uma receita, autoriza-nos a disponibilizá-la aos utilizadores ou destinatários que escolher.',
        },
        {
          kind: 'p',
          html: 'Quando elimina conteúdos ou elimina a sua conta, esta licença cessa relativamente aos conteúdos eliminados, salvo nos casos em que o tratamento contínuo seja técnica ou legalmente necessário ou quando os conteúdos já tenham sido acedidos, guardados, copiados ou partilhados por outros, fora do nosso controlo.',
        },
      ],
    },
    {
      id: 'recipes-from-third-parties',
      title: '11. Receitas de websites e redes sociais',
      blocks: [
        {
          kind: 'p',
          html: 'A Gourmetpedia pode ajudá-lo a guardar receitas ou informações relacionadas com receitas encontradas online. É responsável por cumprir os termos, regras de direitos de autor e restrições de utilização de qualquer website terceiro, plataforma de redes sociais ou fonte de conteúdos a partir da qual copia, guarda ou partilha conteúdos de receitas.',
        },
        {
          kind: 'p',
          html: 'Não reivindicamos a propriedade de conteúdos de terceiros nem lhe concedemos direitos sobre receitas, imagens, vídeos, marcas ou outros materiais de terceiros.',
        },
      ],
    },
    {
      id: 'food-allergens-health',
      title: '12. Alimentação, alergénios e informações de saúde',
      blocks: [
        {
          kind: 'p',
          html: 'A Aplicação é uma ferramenta de organização de receitas. Não fornece aconselhamento médico, nutricional, dietético, de alergias ou de segurança alimentar profissional.',
        },
        {
          kind: 'p',
          html: 'É o único responsável pelas receitas e informações que introduz, guarda, utiliza ou partilha. Deve verificar os ingredientes, alergénios, instruções de preparação, tempos de cozedura, instruções de armazenamento, adequação dietética e qualquer informação relacionada com nutrição ou saúde antes de utilizar uma receita.',
        },
        {
          kind: 'p',
          html: 'Não verificamos as receitas introduzidas pelos utilizadores e não podemos garantir que as receitas sejam exatas, seguras, completas, adequadas à sua dieta ou isentas de alergénios ou de outros riscos.',
        },
      ],
    },
    {
      id: 'prohibited-use',
      title: '13. Utilização proibida',
      blocks: [
        { kind: 'p', html: 'Compromete-se a não:' },
        {
          kind: 'ul',
          items: [
            'utilizar a Aplicação para fins ilícitos, fraudulentos, prejudiciais ou abusivos;',
            'carregar, guardar ou partilhar conteúdos que infrinjam direitos de propriedade intelectual ou de privacidade;',
            'partilhar informações confidenciais, sensíveis ou pessoais que não tenha o direito de partilhar;',
            'tentar aceder à conta de outro utilizador ou interferir com a segurança da Aplicação;',
            'realizar engenharia inversa, descompilar, copiar, revender ou explorar a Aplicação, salvo nos casos permitidos por norma imperativa;',
            'utilizar bots, ferramentas de scraping ou sistemas automatizados para sobrecarregar ou utilizar indevidamente a Aplicação;',
            'utilizar a Aplicação de forma que possa danificar, desativar ou prejudicar os nossos serviços ou serviços de terceiros.',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: '14. Propriedade intelectual',
      blocks: [
        {
          kind: 'p',
          html: 'A Aplicação, o seu design, software, interfaces, logótipos, marcas, identidade e conteúdos originais são propriedade nossa ou dos nossos licenciadores e estão protegidos pela legislação aplicável em matéria de propriedade intelectual.',
        },
        {
          kind: 'p',
          html: 'Estes Termos não lhe transferem quaisquer direitos de propriedade sobre a Aplicação. Sob reserva do cumprimento destes Termos, concedemos-lhe uma licença limitada, pessoal, não exclusiva, intransmissível e revogável para utilizar a Aplicação para os seus próprios fins pessoais.',
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '15. Serviços de terceiros',
      blocks: [
        {
          kind: 'p',
          html: 'A Aplicação pode depender de plataformas e serviços de terceiros, incluindo Apple App Store, Google Play, RevenueCat, Firebase, prestadores de alojamento e fontes de conteúdo de redes sociais ou da Web. Estes terceiros podem ter os seus próprios termos e políticas de privacidade.',
        },
        {
          kind: 'p',
          html: 'Não somos responsáveis por plataformas de terceiros, processadores de pagamentos, redes sociais, websites, conteúdos, políticas, indisponibilidades, decisões ou processos de reembolso, salvo se a lei imperativa dispuser de outra forma.',
        },
      ],
    },
    {
      id: 'availability',
      title: '16. Disponibilidade e alterações à Aplicação',
      blocks: [
        {
          kind: 'p',
          html: 'Procuramos manter a Gourmetpedia disponível e funcional, mas não garantimos que a Aplicação esteja sempre ininterrupta, isenta de erros, segura ou disponível em todos os dispositivos ou sistemas operativos.',
        },
        {
          kind: 'p',
          html: 'Podemos atualizar, modificar, suspender ou descontinuar partes da Aplicação, incluindo funcionalidades, requisitos técnicos ou limites gratuitos. Sempre que uma alteração afete materialmente funcionalidades de subscrição paga, procuraremos prestar aviso prévio razoável quando exigido pela legislação aplicável ou pelas regras da plataforma.',
        },
      ],
    },
    {
      id: 'account-deletion-loss',
      title: '17. Eliminação de conta e perda de acesso',
      blocks: [
        {
          kind: 'p',
          html: 'Pode eliminar a sua conta Gourmetpedia na Aplicação acedendo a <strong>Perfil &gt; Excluir Conta</strong> e confirmando a eliminação.',
        },
        {
          kind: 'p',
          html: 'A eliminação da conta é <strong>imediata e irreversível</strong>. Quando elimina a sua conta, a Gourmetpedia elimina a sua conta e os dados associados na Gourmetpedia, incluindo as suas receitas guardadas, biblioteca de receitas, dados de sincronização, informações de perfil e conteúdos relacionados com a conta armazenados pela Aplicação.',
        },
        {
          kind: 'p',
          html: 'Após a eliminação da conta, as suas receitas, definições, registos de receitas partilhadas associados à sua conta e outros dados da conta não podem ser restaurados pela Gourmetpedia.',
        },
        {
          kind: 'note',
          html: '<strong>Importante:</strong> a eliminação da sua conta Gourmetpedia não cancela a sua subscrição na Apple App Store ou Google Play. Deve cancelar a sua subscrição separadamente através da Apple ou Google. Se eliminar a sua conta enquanto a sua subscrição ainda estiver ativa, poderá perder o acesso a funcionalidades premium e a todos os dados associados à sua conta Gourmetpedia. Poderá usar a opção de Restaurar Compras após criar uma nova conta, caso a Apple, Google e RevenueCat consigam verificar um direito ativo, mas o restauro de uma compra não restaura receitas eliminadas, definições eliminadas ou dados de conta eliminados.',
        },
        {
          kind: 'p',
          html: 'Não fornecemos reembolsos pelo facto de uma conta ter sido eliminada. Os reembolsos relativos a compras na Apple App Store ou Google Play são tratados pela plataforma relevante, salvo se a lei imperativa dispuser de outra forma.',
        },
      ],
    },
    {
      id: 'suspension-termination',
      title: '18. Suspensão e cessação',
      blocks: [
        {
          kind: 'p',
          html: 'Podemos suspender ou cessar o seu acesso à Aplicação se incumprir estes Termos, utilizar a Aplicação de forma indevida, criar risco legal ou de segurança, infringir direitos de terceiros, ou se formos obrigados a fazê-lo por lei ou por um prestador de plataforma.',
        },
        {
          kind: 'p',
          html: 'Pode deixar de utilizar a Aplicação a qualquer momento. Se tiver uma subscrição ativa, continua responsável pelo seu cancelamento através da Apple ou Google, conforme descrito acima.',
        },
      ],
    },
    {
      id: 'privacy',
      title: '19. Privacidade',
      blocks: [
        {
          kind: 'p',
          html: 'A nossa recolha e utilização de dados pessoais está descrita na nossa Política de Privacidade, disponível na Aplicação e em <a href="https://gourmetpedia.com/privacy">gourmetpedia.com/privacy</a>, caso esta página esteja disponível. A Política de Privacidade explica que dados recolhemos, por que motivo os recolhemos, durante quanto tempo os conservamos e como pode solicitar a eliminação ou exercer os seus direitos.',
        },
      ],
    },
    {
      id: 'disclaimer',
      title: '20. Exclusão de garantias',
      blocks: [
        {
          kind: 'p',
          html: 'Na medida máxima permitida pela legislação aplicável, a Aplicação é fornecida na qualidade de "tal como está" e "conforme disponível". Não prestamos qualquer garantia de que a Aplicação corresponderá às suas expectativas, de que as receitas ou conteúdos partilhados serão exatos ou seguros, ou de que a Aplicação funcionará de forma ininterrupta ou isenta de erros.',
        },
        {
          kind: 'p',
          html: 'Nada nestes Termos exclui ou limita qualquer garantia ou direito do consumidor que não possa ser excluído ou limitado ao abrigo da legislação aplicável.',
        },
      ],
    },
    {
      id: 'liability',
      title: '21. Limitação de responsabilidade',
      blocks: [
        {
          kind: 'p',
          html: 'Na medida máxima permitida pela legislação aplicável, não somos responsáveis por danos indiretos, incidentais, especiais, consequenciais, punitivos ou por lucros cessantes decorrentes da sua utilização da Aplicação, das suas receitas, de conteúdos de terceiros, de questões da plataforma de subscrição ou da perda de dados na sequência da eliminação da conta.',
        },
        {
          kind: 'p',
          html: 'Nada nestes Termos limita responsabilidade que não possa ser legalmente limitada, incluindo a responsabilidade por dolo, conduta intencional indevida ou direitos imperativos do consumidor ao abrigo da legislação aplicável.',
        },
      ],
    },
    {
      id: 'changes',
      title: '22. Alterações a estes Termos',
      blocks: [
        {
          kind: 'p',
          html: 'Podemos atualizar estes Termos ocasionalmente. Quando o fizermos, atualizaremos a data de "Última atualização" no topo deste documento. Se as alterações forem materiais, podemos notificá-lo na Aplicação ou por outro meio adequado.',
        },
        {
          kind: 'p',
          html: 'A continuação da utilização da Aplicação após os Termos atualizados produzirem efeitos significa que aceita os Termos atualizados. Se não concordar com os Termos atualizados, deve deixar de utilizar a Aplicação e, se aplicável, cancelar a sua subscrição através da Apple ou Google.',
        },
      ],
    },
    {
      id: 'governing-law',
      title: '23. Lei aplicável e litígios',
      blocks: [
        {
          kind: 'p',
          html: 'Estes Termos regem-se pela legislação da Bélgica, sem prejuízo de quaisquer normas imperativas de proteção do consumidor aplicáveis no seu país de residência.',
        },
        {
          kind: 'p',
          html: 'Se for um consumidor, poderá ter o direito de instaurar ações nos tribunais permitidos pela lei imperativa de defesa do consumidor. Caso contrário, os tribunais de Liège, Bélgica, terão competência sobre os litígios relativos a estes Termos.',
        },
      ],
    },
    {
      id: 'severability',
      title: '24. Salvaguarda de cláusulas',
      blocks: [
        {
          kind: 'p',
          html: 'Se alguma disposição destes Termos for considerada inválida ou inexequível, as restantes disposições continuarão a ser aplicáveis. A disposição inválida ou inexequível será interpretada ou substituída na medida necessária para a tornar válida e exequível, preservando o seu objetivo original tanto quanto possível.',
        },
      ],
    },
    {
      id: 'contact',
      title: '25. Contacto',
      blocks: [
        {
          kind: 'p',
          html: 'Para questões relativas a estes Termos, à Aplicação, à sua conta ou à sua subscrição, contacte:',
        },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Gourmetpedia<br>Liège, Bélgica<br>Email: <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
      ],
    },
  ],
}

export default terms
