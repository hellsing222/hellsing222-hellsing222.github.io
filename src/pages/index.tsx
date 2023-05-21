import {
  Divider,
  Form,
  Radio,
  Image,
  Space,
  Input,
  Button,
  List,
} from 'antd-mobile';
import type1 from '../images/type1.png';
import type2 from '../images/type2.png';
import type3 from '../images/type3.png';
import layout from '../images/layout.png';
import calc from '../images/calc.png';
import spead from '../images/spead.png';
import result from '../images/result.png';

import DemoBlock from './DemoBlock';
import styles from './index.less';
import RadioInput from './RadioInput';
import { useState } from 'react';
import calculate from './calculate';

const imgs: any = {
    hsr_a: 'https://tcs.thk.com/images/lm/kataban/hsr_a.png',
    hsr_r: '//tcs.thk.com/images/lm/kataban/hsr_r.png',
    shs_v: '//tcs.thk.com/images/lm/kataban/shs_v.png'
};
const sizes: any = {
    15: 23,
    35: 94,
    45: 179,
    65: 412
}
export default function IndexPage() {
  const [state, setState] = useState<any>();
  const onFinish = (values: any) => {
    setState(calculate(values));
  };
  return (
    <div>
      <h1 className={styles.title}>直线导轨选型与寿命预测</h1>
      {!state && (
        <Form
          onFinish={onFinish}
          className={styles.form}
          footer={
            <Button block type="submit" color="primary" size="large">
              提交
            </Button>
          }
        >
          <DemoBlock title="使用姿势选择">
            <Form.Item name="type" label="">
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value="1">
                    <Space align="center">
                      水平使用
                      <Image width={150} src={type1} />
                    </Space>
                  </Radio>
                  <Radio value="2">
                    <Space align="center">
                      竖直使用
                      <Image width={150} src={type2} />
                    </Space>
                  </Radio>
                  <Radio value="3">
                    <Space align="center">
                      挂壁使用
                      <Image width={150} src={type3} />
                    </Space>
                  </Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </DemoBlock>
          <DemoBlock title="滑块布局选择">
            <Space>
              <div style={{ width: 100 }}>
                <Form.Item name="rn" label="请选择轨道根数">
                  <Radio.Group>
                    <Space>
                      <Radio value="1">1</Radio>
                      <Radio value="2">2</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="bn" label="请选择滑块个数/1轴。">
                  <Radio.Group>
                    <Space>
                      <Radio value="1">1</Radio>
                      <Radio value="2">2</Radio>
                    </Space>
                    <Space>
                      <Radio value="3">3</Radio>
                      <Radio value="4">4</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>
              <Image width={300} src={layout} />
            </Space>
          </DemoBlock>
          <DemoBlock title="型号选择">
            <Space align="center">
              <div style={{ width: 150 }}>
                <Form.Item name="Katashiki" label="请选择类型。" >
                  <Radio.Group defaultValue="SRS">
                    <Space>
                      <Radio value="SRS">滚珠</Radio>
                      <Radio value="RSR">滚柱</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  dependencies={['Katashiki']}
                  noStyle
                >
               
                  {({ getFieldsValue }) => {
                    const { Katashiki } = getFieldsValue();
                    if (Katashiki === 'RSR')
                      return (
                        <Form.Item
                        name="Size"
                        label="请选择尺寸。"
                      >
                        <Radio.Group>
                          <Space>
                            <Radio value="45">45</Radio>
                            <Radio value="65">65</Radio>
                          </Space>
                        </Radio.Group>
                        </Form.Item>
                      );
                     
                      return (
                        <Form.Item
                        name="Size"
                        label="请选择尺寸。"
                      >
                        <Radio.Group>
                          <Space>
                            <Radio value="15">15</Radio>
                            <Radio value="35">35</Radio>
                          </Space>
                        </Radio.Group>
                        </Form.Item>
                      );
                  }}
                </Form.Item>
                <Form.Item name="BlockType" label="请选择滑块类型。">
                  <Radio.Group>
                    <Space direction='vertical'>
                      <Radio value="hsr_a">法兰</Radio>
                      <Radio value="hsr_r">加高</Radio>
                      <Radio value="shs_v">标准</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>
              <Form.Item dependencies={['BlockType']}>
                {({ getFieldsValue }) => {
                  const { BlockType = 'hsr_a' } = getFieldsValue();
                  return <Image width={200} src={imgs[BlockType]} />;
                }}
              </Form.Item>
            </Space>
          </DemoBlock>
          <DemoBlock title="载重条件输入">
            <Image width={300} src={calc} />
            <Form.Item dependencies={['Size']}>
                {({ getFieldsValue }) => {
                  const { Size } = getFieldsValue();
                  return  <Form.Item name="LM_Calc_m" label="载重 (m1) kg">
                  <Input type="number" placeholder={sizes[Size]} />
                </Form.Item>
                }}
              </Form.Item>
           
            {/* <Form.Item
              name="LM_Calc_Gr"
              label="载重位置_高度 (Gr1) mm"
              help="请输入与基准轨道底面之间的距离。"
            >
              <Input type="number" placeholder="输入数值" />
            </Form.Item>
            <Form.Item
              name="LM_Calc_Ga"
              label="载重位置_长度 (Ga1) mm"
              help="请输入与基准滑块中心之间的距离。"
            >
              <Input type="number" placeholder="输入数值" />
            </Form.Item>
            <Form.Item
              name="LM_Calc_Gt"
              label="载重位置_宽度 (Gt1) mm"
              help="请输入与基准轨道中心之间的距离。"
            >
              <Input type="number" placeholder="输入数值" />
            </Form.Item> */}
          </DemoBlock>
          <DemoBlock title="速度条件输入">
            <Image width={300} src={spead} />
            <Form.Item
              name="LM180_g_1"
              label="移动距离 (ST) mm"
              help="请输入LM滑块移动的距离。(ST>0)"
            >
              <Input type="number" placeholder="输入数值" />
            </Form.Item>
            <Form.Item
              name="LM180_c_1"
              label="速度 (V) mm/s"
              help="请输入要计算的LM滚动导轨的最高速度(V>0)"
            >
              <RadioInput
                options={[
                  {
                    l: '中速(2000)',
                    v: 2000,
                  },
                  {
                    l: '低速(1000)',
                    v: 1000,
                  },
                  {
                    l: '微速(250)',
                    v: 250,
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="LM180_d_1"
              label="加减速时间 (tn) sec"
              help="请输入达到最高速度的时间以及从最高速度到停止的时间(tn>0) 动作条件不成立，因此作为等速运动计算。
            "
            >
              <Input type="number" placeholder="输入数值" />
            </Form.Item>
            <Form.Item name="LM180_e_1" label="加速度 (α) m/s²">
              <RadioInput
                options={[
                  {
                    l: '高加速度(10)',
                    v: 2000,
                  },
                  {
                    l: '中加速度(5)',
                    v: 5,
                  },
                  {
                    l: '低中加速度(2)',
                    v: 2,
                  },
                  {
                    l: '不明(3)',
                    v: 3,
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="LM180_f_1"
              label="负荷系数 (fw) "
              help="通常作往返运动的机械在运转中大都伴随振动或冲击，特别是要正确计算在高速运转时所产生的振动以及频繁起动停止时所导致的所有冲击则尤为困难。因此，速度・振动的影响很大时，请参考根据经验所得到的以下负荷系数。
            fw 1～1.2 振动、冲击 [微] 速度 [V ≦ 250mm/s]
            fw 1.2～1.5 振动、冲击[小]　 速度 [250 < V ≦ 1000mm/s]
            fw 1.5～2.0 振动、冲击 [中]　 速度 [1000 < V ≦ 2000mm/s]
            fw 2.0～3.5 振动、冲击 [大]　 速度 [V > 2000mm/s]"
            >
              <RadioInput
                options={[
                  {
                    l: '1.2',
                    v: 1.2,
                  },
                  {
                    l: '1.5',
                    v: 1.5,
                  },
                  {
                    l: '2.0',
                    v: 2.0,
                  },
                  {
                    l: '2.5',
                    v: 2.5,
                  },
                  {
                    l: '3',
                    v: 3,
                  },
                  {
                    l: '3.5',
                    v: 3.5,
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="使用频率 (往返次数) (n)"
              help="请输入所选单位内的往返次数(n>0)"
            >
              <Space>
                <Form.Item name="LM180_h_0" style={{ width: 100 }}>
                  <Input type="number" placeholder="输入数值" />
                </Form.Item>
                <Form.Item name="LM180_h_1">
                  <Radio.Group>
                    <Space>
                      <Radio value="h">/hour</Radio>
                      <Radio value="d">/day</Radio>
                      <Radio value="y">/year</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Space>
            </Form.Item>
          </DemoBlock>
        </Form>
      )}

      {state && (
        <div>
          <List header="计算结果">
            {Object.keys(state).map((i) => (
              <List.Item extra={state[i]} key={i}>
                {i}
              </List.Item>
            ))}
          </List>
          <Image width="100%" src={result} />

          <Space align="center" className={styles.btns}>
            <Button color="primary" fill="solid">
              保存结果
            </Button>
            <Button color="primary" fill="outline">
              保存为CAD
            </Button>
          </Space>
        </div>
      )}
    </div>
  );
}
