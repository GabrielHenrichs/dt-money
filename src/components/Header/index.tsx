import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import dtMoneyLogo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtMoneyLogo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
