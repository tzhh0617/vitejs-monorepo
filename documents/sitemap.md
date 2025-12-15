# ButterAI Global Sitemap

本文档定义了 ButterAI 平台四个核心业务端（Client, Service, Admin, Talent）的目录结构与功能分组。针对不同角色（HR, HR Leader, Manager, SD, SD Leader, Country Head, Admin, Talent），系统会根据权限展示不同的菜单结构。

---

## 1. Client 端 (Client Portal)

**目标用户**: HR, HR Leader, Manager

### 1.1 HR (Human Resources)

_日常操作人员，拥有最全面的操作权限。_

- **Dashboard** (概览): 待办事项, 活跃员工数, 本月入职/离职数
- **People** (人员管理):
  - Directory (全员列表), EOR Employees, Contractors, GPO Employees
  - Team Profile (员工详情)
- **Onboarding** (入职): New Hire Request (发起入职), Onboarding Tracker (进度追踪)
- **Payroll & Payments** (薪酬): Payroll Cycles (薪酬周期), Invoices (发票), Payroll Reports (Gross-to-Net, Cost Reports)
- **Time & Benefits** (考勤福利): Time Off (休假管理), Timesheets (工时管理), Benefits (福利概览)
- **Insights** (报表): Standard Reports (标准报表)
- **Settings** (设置): Company Profile (公司信息)

### 1.2 HR Leader (Global HRD)

_团队负责人，侧重于审批与全局数据洞察。_

- **Dashboard** (概览): **Global Headcount Map (全球分布)**, **Cost Summary (成本总览)**, Approvals (待审批), Compliance Alerts (合规预警)
- **People** (人员管理): Directory (全员列表 - 只读/审批视角)
- **Approvals** (审批中心): New Hires (入职审批), Payroll Runs (薪酬发放审批), Offboarding (离职审批)
- **Insights** (高级报表): **Cost Analysis (成本分析)**, **Headcount Trends (人员趋势)**, **DE&I Reports (多样性报告)**
- **Settings** (设置): User Management (HR 团队权限管理), Billing & Payment Methods (支付配置)

### 1.3 Manager (Line Manager)

_业务经理，仅关注自己团队的成员。_

- **Dashboard** (概览): Team Calendar (团队日历 - 休假/生日), Pending Requests (待审批休假/工时)
- **My Team** (我的团队): Team Directory (下属列表), Employee Profile (下属详情 - 受限视图)
- **Time & Attendance** (考勤): Time Off Approvals (休假审批), Timesheet Approvals (工时审批)

---

## 2. Service 端 (Service Portal)

**目标用户**: SD/OC, SD/OC Leader, Manager (Country Head)

### 2.1 SD / OC (Service Delivery / Operation Center)

_一线交付人员，专注于任务执行与工单处理。_

- **Workspace** (工作台): **My Tasks (我的任务)**, SLA Warning (即将超时)
- **Clients** (客户): Client List (负责的客户), Client Details (服务配置)
- **Operations** (交付运营):
  - Onboarding Ops (签证/合同任务)
  - Payroll Ops (数据录入/计算/校验)
  - Offboarding Ops (离职结算)
- **Tickets** (工单): Assigned to Me (指派给我的工单)
- **Knowledge Base** (知识库): Country Rules (国家规则), Templates (模板)

### 2.2 SD / OC Leader

_交付团队主管，专注于团队绩效与任务分配。_

- **Dashboard** (概览): **Team Workload (团队负载)**, **SLA Performance (SLA 达成率)**, Critical Issues (严重问题)
- **Task Management** (任务管理): **Unassigned Queue (待分配池)**, Reassign Tasks (任务改派)
- **Quality Control** (质量控制): Payroll Audit (薪酬审计), Process Compliance (流程合规)
- **Reports** (报表): Team Efficiency (团队效率), Error Rates (错误率分析)

### 2.3 Manager (CEO, Country Head)

_区域/国家负责人，专注于宏观经营指标。_

- **Dashboard** (概览): **Revenue Overview (营收概览)**, **Client Satisfaction (NPS/CSAT)**, **Gross Margin (毛利率)**, Operational Health (运营健康度)
- **Clients** (重点客户): Key Accounts (大客户状态), Contract Renewals (续约预警)
- **Business Insights** (经营分析): Profitability by Country (分国家盈利能力), Staff Utilization (人员利用率)

---

## 3. Admin 端 (Admin Portal)

**目标用户**: PM, Support, Leader, Manager, Admin

### 3.1 PM (Project Manager)

_实施顾问与项目经理，负责新客户上线与配置。_

- **Projects** (项目管理): My Projects (我的项目), Milestones (里程碑), Implementation Status (实施进度)
- **Tenant Setup** (租户配置): Client Configuration (客户配置), Data Import (数据导入)
- **Handover** (交付): Project Sign-off (项目验收), Handover to Support (转交支持)

### 3.2 Support

_技术支持，负责上线后的问题解决。_

- **Help Desk** (工单中心): Ticket Queue (工单池), SLA Breach (超时预警)
- **Troubleshooting** (排查工具): User Impersonation (模拟用户), System Logs (系统日志查询)
- **Client Base** (客户库): Live Clients (上线客户), Configuration Lookup (配置查询)

### 3.3 Leader (PM Leader / Support Leader)

_团队主管，关注团队效率与项目/服务质量。_

- **Dashboard** (概览): Project Portfolio (项目组合状态), Support Volume (工单量趋势), Team Capacity (团队产能)
- **Resource Management** (资源管理): Staff Allocation (人员分配), Performance Review (绩效评估)
- **Quality** (质量): Project Health (项目健康度), CSAT (客户满意度 - 支持)

### 3.4 Manager

_部门经理，关注宏观运营。_

- **Overview** (总览): Implementation Revenue (实施收入), Churn Rate (流失率)
- **Strategic Accounts** (战略客户): VIP Project Status (VIP 项目状态)

### 3.5 Admin (System Administrator)

_底层配置人员，维护系统稳定性与安全性。_

- **System Core** (系统核心): Feature Flags (功能开关), Global Settings (全局设置 - 货币/时区)
- **Security** (安全): Access Control (RBAC), Audit Trails (完整审计日志), Security Alerts (安全报警)
- **Integrations** (集成): API Management (API 管理), Webhooks
- **Maintenance** (维护): System Health (系统健康), Cache Management (缓存管理)

---

## 4. Talent 端 (Talent Portal)

**目标用户**: Talent (Candidate, Employee, Contractor)

### 4.1 Talent

_通用视图，根据所处阶段（候选人/在职）动态展示内容。_

- **Home** (首页): Action Items (待办: 签署/上传), Announcements (公告)
- **My Profile** (个人档案): Personal Info (个人信息), Bank Details (银行卡), Documents (文档中心)
- **Finance** (财务):
  - Payslips (工资单 - Employee/EOR)
  - Invoices (发票 - Contractor)
  - Tax Documents (报税单)
- **Work** (工作): Time Off (休假申请/余额), Timesheets (工时申报), Expenses (报销)
- **Benefits** (福利 - EOR Only): My Benefits (我的福利), Enrollment (福利选购)
