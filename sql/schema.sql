CREATE TABLE `exam`
(
    `id`                  INT          NOT NULL AUTO_INCREMENT,
    `name`                VARCHAR(255) NOT NULL,
    `createTime`          TIMESTAMP    NOT NULL,
    `onlineTime`          TIMESTAMP    NOT NULL,
    `updateTime`          TIMESTAMP    NOT NULL,
    `manager`             VARCHAR(128) NOT NULL,
    `updateComment`       VARCHAR(255) DEFAULT NULL,
    `status`              VARCHAR(255) NOT NULL,
    `showCourseIntro`     INT          DEFAULT NULL,
    `showLearningFile`    INT          DEFAULT NULL,
    `showExamInformation` INT          NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci