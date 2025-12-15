# ButterAI 产品介绍

## 1. 产品概述

ButterAI 是一家全球领先的人力资源服务提供商BIPO的服务平台，致力于帮助企业在 全球 200 个国家和地区 轻松拓展业务。我们提供一站式的 **EOR (Employer of Record)**、**GPO (Global Payroll Outsourcing)** 和 **COR (Contractor of Record)** 服务，帮助客户解决全球雇佣、薪酬支付及合规性难题。

## 2. 核心服务 (Core Services)

### 2.1 EOR (名义雇主服务)

帮助客户在没有当地法律实体的情况下，合法雇佣全职员工。我们承担所有法律、合规及税务责任。

- **Onboarding**: 包括合同签署 (Contract)、签证办理 (Visa) 等入职流程。
- **Lifecycle Management**: 员工个人信息更新 (Personal Information Update)。
- **Renewals**: 签证续签 (Visa Renew)、合同续签 (Contract Renew)。
- **Payroll**: 处理 EOR 员工的薪酬发放。
- **Offboarding**: 离职流程处理。

### 2.2 GPO (全球薪酬外包)

为已在当地拥有法律实体的客户提供薪酬计算与发放服务。

- **Regular Payroll**: 常规薪酬周期处理。
- **Payroll Calendar**: 薪酬日历管理，确保按时发薪。
- **Ad-hoc Payroll**: 临时或一次性的薪酬支付处理。

### 2.3 COR (独立承包人服务)

帮助客户合规地管理全球各地的独立承包人 (Contractors)。

- **Contract Management**: 签署承包合同 (Sign Contract)。
- **Invoicing**: 承包商发票管理。
- **Payment**: 承包商费用支付。
- **Termination**: 合约终止处理。

## 3. 系统架构与用户端 (Platform Architecture)

为了满足不同角色的需求，ButterAI 平台设计了四个独立且互联的业务端：

### 3.1 Client 端 (客户门户)

- **目标用户**:
  - **HR**: 日常操作人员，负责具体员工管理、发起请求、查看报表。
  - **HR Leader**: 团队负责人，负责审批请求、查看团队绩效与合规概览。
  - **Manager**: 业务部门经理，负责审批下属休假、工时，查看团队基本信息。
- **主要功能**:
  - 全球员工概览与管理。
  - 发起新的雇佣请求 (EOR/Contractor)。
  - 查看和审批薪酬报告 (Payroll Reports)。
  - 获取合规性洞察与报表。

### 3.2 Service 端 (服务门户)

- **目标用户**:
  - **SD (Service Delivery) / OC (Operation Center)**: 一线服务交付与运营人员，处理具体工单与薪酬计算。
  - **SD/OC Leader**: 交付团队主管，监控 SLA、分配任务、处理升级投诉。
  - **Manager (CEO, Country Head)**: 区域或国家负责人，关注整体业务健康度、大客户满意度与宏观运营指标。
- **主要功能**:
  - 处理客户发起的请求 (Tickets/Tasks)。
  - 执行入离职、签证、薪酬计算等后台操作。
  - 监控服务 SLA 与交付质量。

### 3.3 Admin 端 (管理与配置门户)

- **目标用户**:
  - **PM (Project Manager)**: 项目经理，负责客户项目实施、进度维护与配置落地。
  - **Support**: 技术支持，负责项目交付后的客户与系统问题排查及解决。
  - **Leader (PM/Support Leader)**: 团队主管，负责资源协调、项目组合管理与服务质量监控。
  - **Manager**: 部门经理，负责整体运营指标与大客户关系。
  - **Admin**: 系统管理员，负责底层配置、租户管理与安全审计。
- **主要功能**:
  - 系统全局配置。
  - 客户租户初始化与配置。
  - 权限管理与流程定义。

### 3.4 Talent 端 (人才门户)

- **目标用户**:
  - **Talent**: 包含 Candidate (候选人)、Employee (在职员工)、Contractor (独立承包人)。
- **主要功能**:
  - **Candidate**: 完成入职资料提交、签署 Offer/合同。
  - **Employee**: 查看工资单 (Payslips)、申请休假、更新个人信息。
  - **Contractor**: 提交发票 (Invoices)、签署服务协议、查看付款记录。

## 4. 竞争优势

- **全球覆盖**: 支持 200+ 国家和地区，确保持续合规。
- **全栈服务**: 从 EOR 到 GPO 再到 Contractor 管理，满足企业不同阶段的全球化需求。
- **角色化体验**: 针对 HR、员工、服务团队和管理员提供定制化的操作界面，提升协作效率。
