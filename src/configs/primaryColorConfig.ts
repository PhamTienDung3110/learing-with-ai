export type PrimaryColorConfig = {
  name?: string
  light?: string
  main: string
  dark?: string
}

// Primary color config object
const primaryColorConfig: PrimaryColorConfig[] = [
  {
    name: 'primary-1',
    light: '#FFC107',
    main: '#f2db07',
    dark: '#FF6F00'
  },
  {
    name: 'primary-2',
    light: '#FFB300',
    main: '#FF8F00',
    dark: '#FF6D00'
  },
  {
    name: 'primary-3',
    light: '#FFD600',
    main: '#FFAB00',
    dark: '#FF8F00'
  },
  {
    name: 'primary-4',
    light: '#FFC400',
    main: '#FFAB00',
    dark: '#FF8F00'
  },
  {
    name: 'primary-5',
    light: '#FFB300',
    main: '#FF8F00',
    dark: '#FF6D00'
  }
]

export default primaryColorConfig
