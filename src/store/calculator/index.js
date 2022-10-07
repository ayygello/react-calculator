import StateModule from '../module';

/**
 * Состояние калькулятора
 */
class CalculatorState extends StateModule {
  /**
   * Начальное состояние
   * @return {Object}
   */
  initState() {
    return {
      result: '0',
      sign: '',
      tempA: '',
      tempB: '',
      keyboard: [
        'C',
        'plus-minus',
        '%',
        '/',
        7,
        8,
        9,
        '*',
        4,
        5,
        6,
        '-',
        1,
        2,
        3,
        '+',
        '.',
        0,
        'backspace',
        '=',
      ],
    };
  }

  input(key) {
    // Очистка дисплея и значений
    if (key === 'C') {
      this.setState({
        ...this.getState(),
        tempA: '',
        tempB: '',
        sign: '',
        result: '0',
      });
    }

    // Backspacing result
    if (key === 'backspace') {
      const toStringCut = (arg) =>
        Number(arg.toString().substring(0, arg.toString().length - 1));

      console.log('length >>>>', this.getState().result.toString().length);
      this.getState().result.toString().length === 1
        ? this.setState({
            ...this.getState(),
            result: '0',
            tempA: '',
            tempB: '',
          })
        : this.setState({
            ...this.getState(),
            result: toStringCut(this.getState().result),
          });

      this.getState().sign === ''
        ? this.setState({
            ...this.getState(),
            tempA: toStringCut(this.getState().tempA),
          })
        : this.setState({
            ...this.getState(),
            tempB: toStringCut(this.getState().tempB),
          });
      console.log('back >>>>', this.getState().result);
    }

    // Добавить / убрать знак отрицания у числа
    if (key === 'plus-minus') {
      this.getState().sign === ''
        ? this.setState({
            ...this.getState(),
            tempA: this.getState().tempA * -1,
            result: this.getState().tempA * -1,
          })
        : this.setState({
            ...this.getState(),
            tempB: this.getState().tempB * -1,
            result: this.getState().tempB * -1,
          });
    }

    // Вычисление процентов
    if (key === '%') {
      this.getState().sign === ''
        ? this.setState({
            ...this.getState(),
            tempA: (this.getState().tempA /= Math.pow(100, 1)),
            result: this.getState().tempA,
          })
        : this.setState({
            ...this.getState(),
            tempB: (this.getState().tempA / 100) * this.getState().tempB,
            result: (this.getState().tempA / 100) * this.getState().tempB,
          });
    }

    // Добавление десятичной точки
    if (
      key === '.' &&
      !this.getState().result.toString().split('').includes('.')
    ) {
      this.getState().sign === ''
        ? this.setState({
            ...this.getState(),
            tempA: `${this.getState().tempA.toString()}${key}`,
            result: `${this.getState().result}${key}`,
          })
        : this.setState({
            ...this.getState(),
            tempB: `${this.getState().tempB}${key}`,
            result: `${this.getState().result}${key}`,
          });
    }

    // Ввод числа
    if (Number(key) === key) {
      // Проверка на наличие оператора в store
      this.getState().sign === ''
        ? this.setState({
            ...this.getState(),
            result: Number(`${this.getState().result}${key}`),
            tempA: Number(`${this.getState().tempA}${key}`),
          })
        : this.setState({
            ...this.getState(),
            tempB: Number(`${this.getState().tempB}${key}`),
            result: Number(`${this.getState().tempB}${key}`),
          });

      console.log('tempA >>>>', this.getState().tempA);
      console.log('tempB >>>>', this.getState().tempB);
    }

    // Ввод математических операторов
    if (key === '+' || key === '-' || key === '*' || key === '/') {
      this.setState({
        ...this.getState(),
        sign: key,
      });
      console.log('sign >>>>', this.getState().sign);
    }

    // Математические операции
    if (key === '=') {
      this.getState().sign === '+'
        ? this.setState({
            ...this.getState(),
            result: this.getState().tempA + this.getState().tempB,
          })
        : this.getState().sign === '-'
        ? this.setState({
            ...this.getState(),
            result: this.getState().tempA - this.getState().tempB,
          })
        : this.getState().sign === '*'
        ? this.setState({
            ...this.getState(),
            result: this.getState().tempA * this.getState().tempB,
          })
        : this.getState().sign === '/'
        ? this.setState({
            ...this.getState(),
            result: this.getState().tempA / this.getState().tempB,
          })
        : this.setState({
            ...this.getState(),
            result: this.getState().tempA,
          });

      this.setState({
        ...this.getState(),
        tempA: this.getState().result,
      });
    }
  }
}

export default CalculatorState;
