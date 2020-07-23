import relativeTime from 'dayjs/plugin/relativeTime'

export default ({ app: { $dayjs } }) => {
  $dayjs.extend(relativeTime)
}
