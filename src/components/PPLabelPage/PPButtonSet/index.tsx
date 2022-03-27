import { Col, InputNumber, Popover, Row, Slider } from 'antd';
import React, { useEffect, useState } from 'react';
import PPToolBarButton from '../PPToolBarButton';
import styles from './index.less';

const defaultMinSize = 0;
const defaultMaxSize = 100;
const defaultSize = 10;

type Props = {
  size?: number;
  minSize?: number;
  maxSize?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onChange?: (size: number) => void;
  imgSrc?: string;
  disLoc?: string;
};

const Component: React.FC<Props> = (props) => {
  const [size, setSizeRaw] = useState(formatSize(props.size));
  function setSize(destSize: number | undefined) {
    setSizeRaw(formatSize(destSize));
  }
  const minSize = props.minSize == undefined ? defaultMinSize : props.minSize;
  const maxSize = props.maxSize == undefined ? defaultMaxSize : props.maxSize;
  function formatSize(originSize?: number) {
    if (originSize == undefined) return defaultSize;
    if (originSize <= minSize) return minSize;
    if (originSize >= maxSize) return maxSize;
    return originSize;
  }
  useEffect(() => {
    setSize(props.size);
    console.log(`props.size changed to:${props.size}`);
  }, [props.size]);

  return (
    <Popover
      overlayClassName={`${styles.popover} ${props.disLoc == 'left' ? styles.popoverLeft : ''}`}
      placement={props.disLoc || 'right'}
      content={
        <Row>
          <Col span={16}>
            <Slider
              className={styles.slider}
              value={size}
              max={maxSize}
              min={minSize}
              onChange={(newSize) => {
                props.onChange?.call(0, newSize);
              }}
              tooltipVisible={false}
            />
          </Col>
          <Col span={8}>
            <InputNumber
              min={minSize}
              max={maxSize}
              value={size}
              onChange={(newSize) => {
                props.onChange?.call(0, newSize);
              }}
              step={10}
            />
          </Col>
        </Row>
      }
      trigger={'hover'}
    >
      {' '}
      <PPToolBarButton imgSrc={props.imgSrc || ''} onClick={props.onClick}>
        {props.children}
      </PPToolBarButton>
    </Popover>
  );
};
export default Component;
