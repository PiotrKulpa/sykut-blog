const useStringSlicer = (content = '', from = 0, to = 1) => 
  String(content).slice(from, to).replace(/<[^>]+>/g, '') + ' ...';

export default useStringSlicer;