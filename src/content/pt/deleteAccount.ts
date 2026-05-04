import type { PageContent } from '../types'

const deleteAccount: PageContent = {
  title: 'Excluir Conta e Dados',
  lastUpdatedISO: '2026-05-03',
  intro: [
    {
      kind: 'p',
      html: 'Esta página explica como pode eliminar a sua conta Gourmetpedia e o que acontece aos seus dados quando a sua conta é eliminada.',
    },
    {
      kind: 'p',
      html: 'Esta página destina-se a estar disponível em <a href="https://gourmetpedia.com/delete-account">https://gourmetpedia.com/delete-account</a>.',
    },
  ],
  sections: [
    {
      id: 'how-to-delete',
      title: '1. Como eliminar a sua conta',
      blocks: [
        { kind: 'p', html: 'Pode eliminar a sua conta Gourmetpedia diretamente na Aplicação:' },
        { kind: 'p', html: '<strong>Perfil &gt; Excluir Conta</strong>' },
        {
          kind: 'p',
          html: 'Antes de a sua conta ser eliminada, poder-lhe-á ser pedido que confirme a sua escolha. A eliminação da conta através da Aplicação é <strong>imediata e irreversível</strong>.',
        },
      ],
    },
    {
      id: 'cannot-access-app',
      title: '2. Se não conseguir aceder à Aplicação',
      blocks: [
        {
          kind: 'p',
          html: 'Se não conseguir aceder à Aplicação, pode solicitar a eliminação da conta e dos dados contactando-nos através de <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>.',
        },
        {
          kind: 'p',
          html: 'Para nos ajudar a identificar a sua conta, contacte-nos a partir do endereço de email associado à sua conta Gourmetpedia e utilize o assunto <strong>Excluir a minha conta Gourmetpedia</strong>. Poderemos pedir-lhe para verificar a sua identidade antes de processar o pedido.',
        },
        {
          kind: 'p',
          html: 'Assim que o seu pedido tiver sido verificado e processado, a sua conta e os dados associados serão eliminados conforme descrito abaixo.',
        },
      ],
    },
    {
      id: 'what-data-is-deleted',
      title: '3. Que dados são eliminados',
      blocks: [
        {
          kind: 'p',
          html: 'Quando elimina a sua conta, a Gourmetpedia elimina os dados pessoais e os conteúdos associados à sua conta, incluindo:',
        },
        {
          kind: 'ul',
          items: [
            'a sua conta Gourmetpedia;',
            'o seu endereço de email;',
            'o seu primeiro e último nome;',
            'as suas receitas guardadas;',
            'a sua biblioteca de receitas;',
            'a sua organização, definições e preferências;',
            'os seus dados sincronizados entre dispositivos.',
          ],
        },
        {
          kind: 'p',
          html: 'Após a eliminação, a Gourmetpedia deixa de manter os dados da sua conta nos seus próprios sistemas.',
        },
      ],
    },
    {
      id: 'shared-recipes',
      title: '4. Receitas partilhadas',
      blocks: [
        {
          kind: 'p',
          html: 'Se anteriormente partilhou uma receita com outro utilizador, essa receita pode permanecer disponível na conta do destinatário.',
        },
        {
          kind: 'p',
          html: 'Quando uma receita é partilhada na Gourmetpedia, é copiada ou duplicada para a biblioteca de receitas do próprio destinatário. A Gourmetpedia não mantém uma ligação persistente de autoria que nos permita identificar ou remover todas as cópias de uma receita após a eliminação da conta original.',
        },
        {
          kind: 'p',
          html: 'A eliminação da sua conta remove a sua própria conta e a sua própria biblioteca de receitas, mas não elimina automaticamente as cópias de receitas que tenham sido previamente guardadas por outros utilizadores.',
        },
      ],
    },
    {
      id: 'subscription-and-purchases',
      title: '5. Subscrição e compras',
      blocks: [
        {
          kind: 'note',
          html: '<strong>Importante:</strong> a eliminação da sua conta Gourmetpedia não cancela automaticamente a sua subscrição na Apple App Store ou Google Play.',
        },
        {
          kind: 'p',
          html: 'Se tem uma subscrição ativa, deve cancelá-la separadamente através do seu Apple ID ou da sua conta Google Play.',
        },
        {
          kind: 'p',
          html: 'Se eliminar a sua conta Gourmetpedia sem cancelar a sua subscrição, a Apple ou a Google poderão continuar a gerir e a faturar a subscrição de acordo com os seus próprios termos e políticas.',
        },
        {
          kind: 'p',
          html: 'Após a eliminação da conta, poderá perder o acesso a funcionalidades premium, receitas guardadas, dados sincronizados e quaisquer conteúdos associados à sua conta Gourmetpedia.',
        },
        {
          kind: 'p',
          html: 'O restauro de uma compra pode restaurar o seu direito de subscrição, sempre que tecnicamente possível, mas não restaurará receitas, definições, registos de receitas partilhadas ou dados de conta que tenham sido eliminados de forma permanente.',
        },
      ],
    },
    {
      id: 'before-deleting',
      title: '6. Antes de eliminar a sua conta',
      blocks: [
        { kind: 'p', html: 'Antes de eliminar a sua conta, recomendamos que:' },
        {
          kind: 'ul',
          items: [
            'exporte ou guarde quaisquer receitas que pretenda manter, se essa opção estiver disponível;',
            'cancele a sua subscrição ativa através da Apple ou Google se já não pretender ser cobrado;',
            'compreenda que a eliminação da conta é permanente e não pode ser revertida.',
          ],
        },
      ],
    },
    {
      id: 'need-help',
      title: '7. Precisa de ajuda?',
      blocks: [
        {
          kind: 'p',
          html: 'Se tiver questões sobre a eliminação da conta ou sobre os seus dados, pode contactar-nos através de:',
        },
        {
          kind: 'p',
          html: '<a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'Operador:<br><strong>Quentin Tusset</strong><br>Liège, Bélgica',
        },
      ],
    },
  ],
}

export default deleteAccount
