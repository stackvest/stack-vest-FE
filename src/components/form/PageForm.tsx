import { Form, FormButton, FormInput,FormSelect,HiddenLabel, PageLabel, SelectOption } from "./PageForm.style"

const PageForm = ({index}) => {
    
  return (
      <>
      { index === 0 &&  <Form action=''>
      <PageLabel htmlFor="borrow-amount">Enter Amount</PageLabel>
      <FormInput>
        <HiddenLabel htmlFor='name'>Enter your name</HiddenLabel>
        
        <input
          type='number'
          name='amount'
          id='borrow-amount'
          placeholder='Enter Amount'
        />
      </FormInput>

      
      <PageLabel htmlFor="Lockup" >Lockup Period</PageLabel>
      <FormSelect id="Lockup">
      <HiddenLabel htmlFor='Lockup'>Enter your name</HiddenLabel>
        <SelectOption selected>1 month</SelectOption>
        <SelectOption>3 month</SelectOption>
        <SelectOption>6 month</SelectOption>
        <SelectOption>12 month</SelectOption>
      </FormSelect>

      
      <FormButton  type='submit'>
        submit
      </FormButton>
    </Form>  }

    {
      (index===1 || index===2) && <Form action=''>
      <PageLabel >Enter Amount</PageLabel>

      <FormInput>
        <HiddenLabel htmlFor='name'>Enter your name</HiddenLabel>
        <input
          type='number'
          name='amount'
          id={ (index==1) ? 'buy-amount' : 'withdraw-amount'
             }
          placeholder='Enter Amount'
        />
      </FormInput>

      
      <FormButton  type='submit'>
      { (index===1) ? 'buy' : 'withdraw'
             }
      </FormButton>
    </Form> 
    }


      </>
   
  )
}

export default PageForm
