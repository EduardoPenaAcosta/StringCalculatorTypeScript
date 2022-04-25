export class Calculator {
  public add (givenInputs: string): string {
    let arrayNumbers: string[]
    let result : number
    if (givenInputs.startsWith('//')) {
      const splitDelimiter: string = givenInputs.substring(2, 3)
      arrayNumbers = givenInputs.split(splitDelimiter)
      if ( this.detectNegativeNumbers(arrayNumbers) == ['Invalid']){
        return 'Invalid'
      }else{
        result = this.sumNumbers(arrayNumbers)
      }

    } else {
      arrayNumbers = givenInputs.split(',')
      console.log(this.detectNegativeNumbers(arrayNumbers))
      if ( this.detectNegativeNumbers(arrayNumbers) == ['Invalid']){
        return 'Invalid'
      }else{
        result = this.sumNumbers(arrayNumbers)
      }
    }
    return String(result)
  }



  public detectNegativeNumbers (givenNumbers: string[]): string[] {
    let arrayNumbers : string[] = []
    givenNumbers.forEach( txtNumber => {
      if( parseInt(txtNumber) < 0){
        arrayNumbers = ['Invalid']
      }else{
        arrayNumbers + txtNumber
      }
    })
    return arrayNumbers
  } 

  public sumNumbers (givenNumbers: string[]): number {
    let result: number = 0
    givenNumbers.forEach(element => {
      if (!isNaN(parseInt(element))) {
        if(!(parseInt(element) >= 1000)){
          result += parseInt(element)
        }
        
      }
    })
    return result
  }
}
