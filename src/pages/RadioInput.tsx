import { Input, Radio, Space } from 'antd-mobile';
import { useEffect, useState } from 'react';

export default ({ options, onChange }: any) => {
  const [state, setState] = useState<any>();
  const [ipt, setIpt] = useState<any>();

  useEffect(() => {
    if (state === '0') {
      onChange(ipt);
    } else {
      setIpt('');
      onChange(state);
    }
  }, [state, ipt]);
  return (
    <>
      <Radio.Group onChange={(v) => setState(v)} value={state}>
        <Space direction="vertical">
          {options.map(({ v, l }: any) => (
            <Radio value={v}>{l}</Radio>
          ))}
          <Space>
            <Radio value="0">自由输入：</Radio>
            <Input
              type="number"
              placeholder="输入数值"
              disabled={state !== '0'}
              onChange={(v) => setIpt(v)}
              value={ipt}
            />
          </Space>
        </Space>
      </Radio.Group>
    </>
  );
};
